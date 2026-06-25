import { site } from "@/lib/site";

export default function sitemap() {
  const routes = ["", "/services", "/car-repair", "/projects", "/gallery", "/about", "/contact"];
  const now = new Date();
  return routes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
