/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  allowedDevOrigins: ["10.71.50.246", "10.69.36.246"],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
    ],
  },
};

module.exports = nextConfig;
