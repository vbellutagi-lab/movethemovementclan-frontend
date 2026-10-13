import type { MetadataRoute } from "next";
import { siteUrl } from "./_lib/siteUrl";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/blogs", "/careers", "/privacy-policy"].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
  }));
}
