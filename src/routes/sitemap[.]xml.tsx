import { createFileRoute } from "@tanstack/react-router";

const SITE_URL = "https://sapropertyworks.lovable.app";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: ({ createHandlers }) =>
      createHandlers({
        GET: async () => {
          const lastmod = new Date().toISOString().split("T")[0];
          const urls = [
            { loc: `${SITE_URL}/`, priority: "1.0", changefreq: "weekly" },
          ];

          const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`;

          return new Response(body, {
            headers: {
              "Content-Type": "application/xml; charset=utf-8",
              "Cache-Control": "public, max-age=3600",
            },
          });
        },
      }),
  },
});
