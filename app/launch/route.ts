import fs from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

// Ported from the standalone move-gym/launch static site — same design and
// countdown, but the Play Game button now links to the same app's /play
// route instead of an absolute cross-domain URL.
export async function GET() {
  const filePath = path.join(process.cwd(), "content", "launch.html");
  const html = await fs.readFile(filePath, "utf-8");

  return new NextResponse(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
    },
  });
}
