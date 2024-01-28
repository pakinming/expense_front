/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: "standalone",

  env: {
    BACKEND_DEV: "http://localhost:8081",
  },

};

export default nextConfig;
