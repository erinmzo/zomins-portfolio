import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const works = [1, 2, 3, 4, 5].map((id) => ({
    url: `https://zomins-portfolio.vercel.app/work/${id}`,
    lastModified: new Date("2025-01-11T10:16:16+00:00"),
    priority: id > 2 ? 0.8 : 0.64,
  }));

  return [
    {
      url: "https://zomins-portfolio.vercel.app",
      lastModified: new Date("2025-01-11T10:16:16+00:00"),
      priority: 1.0,
    },
    {
      url: "https://zomins-portfolio.vercel.app/work",
      lastModified: new Date("2025-01-11T10:16:16+00:00"),
      priority: 0.8,
    },
    {
      url: "https://zomins-portfolio.vercel.app/menu",
      lastModified: new Date("2025-01-11T10:16:16+00:00"),
      priority: 0.8,
    },
    ...works,
  ];
}
