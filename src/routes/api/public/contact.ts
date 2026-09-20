import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(1).max(1000),
});


export const Route = createFileRoute("/api/public/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let payload: unknown;
        try {
          payload = await request.json();
        } catch {
          return Response.json({ error: "Invalid request" }, { status: 400 });
        }

        const parsed = schema.safeParse(payload);
        if (!parsed.success) {
          return Response.json({ error: "Invalid input" }, { status: 400 });
        }
        const { name, email, message } = parsed.data;

        // Persist the message
        try {
          const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
          await supabaseAdmin.from("contact_messages").insert({ name, email, message });
        } catch (e) {
          console.error("contact_messages insert failed", e);
        }

        const targetEmail = "khanshahnawazmoh@gmail.com";

        // Try FormSubmit direct delivery
        try {
          const origin = request.headers.get("origin") || request.headers.get("referer") || "http://localhost:3000";
          const formSubmitRes = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
              "Origin": origin,
              "Referer": origin,
              "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Portfolio-Relay/1.0",
            },
            body: JSON.stringify({
              name,
              email,
              message,
              _replyto: email,
              _subject: `🎬 New Portfolio Inquiry from ${name} (AI Micro-Drama & Video)`,
              _template: "table",
              _captcha: "false",
            }),
          });

          const data = (await formSubmitRes.json().catch(() => null)) as { success?: string; message?: string } | null;
          return Response.json({
            ok: true,
            status: data?.success ?? "true",
            message: data?.message ?? "Message received successfully",
          });
        } catch (error) {
          const anyErr = error as any;
          const errMsg = anyErr?.cause ? `${anyErr.message} (${anyErr.cause?.message || anyErr.cause?.code || String(anyErr.cause)})` : String(error);
          console.error("FormSubmit relay failed:", errMsg);
          return Response.json({ error: "Failed to forward email", details: errMsg, ok: false }, { status: 502 });
        }
      },
    },
  },
});
