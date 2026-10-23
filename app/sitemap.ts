import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: "https://emptea.xyz",
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://emptea.xyz/terms-of-service",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://emptea.xyz/privacy-policy",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://emptea.xyz/eula",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://emptea.xyz/support",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
