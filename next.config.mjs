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
      {
        source: "/services/stones/wayne-county-nj",
        destination: "/services/stones/wayne-nj",
        permanent: true,
      },
      {
        source: "/services/masonry/wayne-county-nj",
        destination: "/services/masonry/wayne-nj",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
