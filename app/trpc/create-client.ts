import { httpLink, httpBatchStreamLink } from "@repo-mv/trpc/client";
import { env } from "../../env";

interface CreateTRPCLinkOpts {
  enableStreaming?: boolean;
}

/** Link factory passed to `trpc.Provider` (see a root providers file, e.g. app/providers.tsx). */
export const createTRPCLink = (opts?: CreateTRPCLinkOpts) => {
  const link = opts?.enableStreaming ? httpBatchStreamLink : httpLink;
  return link({
    url: `${env.NEXT_PUBLIC_API_BASE_URL ?? ""}/trpc`,
    fetch(url, options) {
      // credentials: "include" so the auth cookie rides along cross-origin to the API.
      return fetch(url, { ...options, credentials: "include" });
    },
  });
};
