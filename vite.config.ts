// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const invitationBase = isGitHubPages ? "/sahal-nefha-invitation/" : "/";

export default defineConfig({
  nitro: { preset: "cloudflare-module" },
  vite: {
    base: invitationBase,
    optimizeDeps: {
      // Prebundle the invitation's client dependencies together so opening an
      // existing preview cannot mix React instances during late optimization.
      include: [
        "react",
        "react-dom",
        "react-dom/client",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "@radix-ui/react-slot",
        "class-variance-authority",
        "clsx",
        "lucide-react",
        "tailwind-merge",
      ],
    },
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    prerender: {
      enabled: isGitHubPages,
      autoStaticPathsDiscovery: false,
      crawlLinks: false,
      failOnError: true,
    },
    pages: isGitHubPages
      ? [{ path: invitationBase, prerender: { enabled: true, outputPath: "/" } }]
      : [],
  },
});
