import fs from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";
import { LAUNCH_AT } from "../_lib/launch";

// Ported from the standalone move-gym/launch static site — same design and
// countdown, but the Play Game button now links to the same app's /play
// route instead of an absolute cross-domain URL.
export async function GET() {
  const filePath = path.join(process.cwd(), "content", "launch.html");
  const template = await fs.readFile(filePath, "utf-8");
  const html = template.replace("__LAUNCH_AT_MS__", String(LAUNCH_AT));

  return new NextResponse(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
    },
  });
}
