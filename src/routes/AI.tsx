import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/AI")({
  beforeLoad: () => {
    throw redirect({ to: "/" });
  },
});
