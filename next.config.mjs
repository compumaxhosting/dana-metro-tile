/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/services/tiles/wayne-county-nj",
        destination: "/services/tiles/wayne-nj",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
