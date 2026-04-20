import { createFileRoute } from "@tanstack/react-router";

const SITE_URL = "https://sapropertyworks.lovable.app";

export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: ({ createHandlers }) =>
      createHandlers({
        GET: async () => {
          const body = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
          return new Response(body, {
            headers: {
              "Content-Type": "text/plain; charset=utf-8",
              "Cache-Control": "public, max-age=3600",
            },
          });
        },
      }),
  },
});
