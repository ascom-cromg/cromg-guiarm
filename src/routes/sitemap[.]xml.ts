import { createFileRoute } from "@tanstack/react-router";

// In a pure SPA, server-side handlers are not available.
// The sitemap.xml should be served as a static file from the /public directory.
// This route is kept to prevent broken route tree generation.
export const Route = createFileRoute("/sitemap.xml")({
  component: () => null,
});