/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      },
      {
        protocol: "https",
        hostname: "images.pexels.com"
      },
      {
        protocol: "https",
        hostname: "otium.nl"
      },
      {
        protocol: "https",
        hostname: "otium-wellness-hotel.com"
      }
    ]
  }
};

export default nextConfig;
