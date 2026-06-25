import fs from "fs";
import path from "path";

const IMG_RE = /\.(jpe?g|png|webp|avif|gif)$/i;

/**
 * Reads a folder under /public and returns web paths for every image in it.
 * Drop files into public/<folder> and they appear automatically — no code edit.
 * Runs on the server (build/request time) only.
 */
export function getImages(folder) {
  try {
    const dir = path.join(process.cwd(), "public", folder);
    return fs
      .readdirSync(dir)
      .filter((f) => IMG_RE.test(f))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
      .map((f) => ({
        src: `/${folder}/${f}`,
        alt: f
          .replace(IMG_RE, "")
          .replace(/[-_]+/g, " ")
          .trim(),
      }));
  } catch {
    return [];
  }
}
