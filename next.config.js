/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "build", // ← This creates build/ instead of .out/
};

module.exports = nextConfig;
