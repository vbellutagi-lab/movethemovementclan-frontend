const apiOrigin = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:8000";

// tRPC calls the API server directly from the browser (credentials: "include");
// this rewrite is only needed if you'd rather same-origin-proxy /trpc/* instead.
const apiProxyTarget = process.env.API_PROXY_TARGET ?? apiOrigin;
const enableApiProxy =
  process.env.ENABLE_API_PROXY === "true" || process.env.NODE_ENV !== "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    if (!enableApiProxy) return [];
    return [{ source: "/trpc/:path*", destination: `${apiProxyTarget}/trpc/:path*` }];
  },
};

export default nextConfig;
