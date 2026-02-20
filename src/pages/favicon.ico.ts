import type { APIRoute } from "astro";
import path from "node:path";
import sharp from "sharp";
import ico from "sharp-ico";

// relative to project root
const faviconSrc = path.resolve("src/images/favicon.png");
const sizes = [16, 32, 48];

export const GET: APIRoute = async () => {
  // resize to defined sizes as PNG
  const buffers = await Promise.all(
    sizes.map(async (size) => {
      return await sharp(faviconSrc).resize(size).toFormat("png").toBuffer();
    }),
  );
  // generate ico
  const icoBuffer = ico.encode(buffers);
  const bytes = new Uint8Array(icoBuffer);

  return new Response(bytes, {
    status: 200,
    headers: { "Content-Type": "image/x-icon" },
  });
};
