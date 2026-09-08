import fs from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";
import { isLaunched } from "../_lib/launch";

// Served from a route handler (not /public) so the game can't be reached by
// guessing the URL before launch — /public files bypass all app-level gates.
export const dynamic = "force-dynamic";

export async function GET() {
  if (!isLaunched(Date.now())) {
    return new NextResponse("Not found", { status: 404 });
  }

  const filePath = path.join(process.cwd(), "content", "game.html");
  const html = await fs.readFile(filePath, "utf-8");

  return new NextResponse(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}
