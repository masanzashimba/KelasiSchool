// next.config.d.ts
declare module "next/config" {
  export type NextConfig = import("next").NextConfig;
  export default function defineConfig(config: NextConfig): NextConfig;
}
