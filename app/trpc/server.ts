import { headers } from "next/headers";
import { createTRPCProxyClient, httpLink } from "@repo-mv/trpc/client";
import type { ServerRouter } from "@repo-mv/trpc/client";
import { env } from "../../env";

const url = `${env.NEXT_PUBLIC_API_BASE_URL ?? ""}/trpc`;

async function getRequestHeaders() {
  const h = await headers();
  return { cookie: h.get("cookie") ?? "" };
}

/** Server Component / Route Handler client — forwards the incoming request's cookie. */
export const api = createTRPCProxyClient<ServerRouter>({
  links: [httpLink({ url, headers: getRequestHeaders })],
});
