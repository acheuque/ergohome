import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Evita problemas de rutas en Hostinger si el servidor PHP es muy estricto
  trailingSlash: true,
};

export default nextConfig;
