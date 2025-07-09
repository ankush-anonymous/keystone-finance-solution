/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
   images: {
    domains: [
      "plus.unsplash.com",
      "lh3.googleusercontent.com",
      "www.shutterstock.com" // ✅ Add this line
    ],
  },
}

export default nextConfig
