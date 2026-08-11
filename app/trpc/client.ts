import { createTRPCReact } from "@trpc/react-query";
import type { ServerRouter } from "@repo-mv/trpc/client";

/** React-Query bound client for use inside Client Components. */
export const trpc = createTRPCReact<ServerRouter>();
