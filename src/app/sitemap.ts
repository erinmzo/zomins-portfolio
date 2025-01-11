import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 캐시 방지를 위해 동적 날짜 생성
  const currentDate = new Date().toISOString();

  // 작업 배열 생성
  const works = [1, 2, 3, 4, 5].map((id) => ({
    url: `https://zomins-portfolio.vercel.app/work/${id}`,
    lastmod: currentDate,
    priority: id > 2 ? 0.8 : 0.64,
  }));

  return [
    {
      url: "https://zomins-portfolio.vercel.app",
      lastmod: currentDate,
      priority: 1.0,
    },
    {
      url: "https://zomins-portfolio.vercel.app/work",
      lastmod: currentDate,
      priority: 0.8,
    },
    {
      url: "https://zomins-portfolio.vercel.app/menu",
      lastmod: currentDate,
      priority: 0.8,
    },
    ...works,
  ];
}
