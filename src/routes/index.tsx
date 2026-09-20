import { createFileRoute } from "@tanstack/react-router";
import { PortfolioPage } from "@/components/portfolio/PortfolioPage";

const title = "Mohammad Shahnawaz Khan — AI Video & Micro-Drama Director";
const description =
  "Portfolio of Mohammad Shahnawaz Khan — cinematic AI micro-dramas, short films, product ads and UGC created with cutting-edge generative video pipelines.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioPage,
});
