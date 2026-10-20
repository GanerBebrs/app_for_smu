import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap { return ["/", "/product", "/features", "/specs", "/gallery", "/about", "/process", "/faq", "/contact", "/shipping", "/privacy", "/terms"].map((path) => ({ url: `https://yourproduct.com${path}`, lastModified: new Date() })); }
