/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      domains: [
        "source.unsplash.com",
        "images.unsplash.com",
        "ext.same-assets.com",
        "ugc.same-assets.com",
        "lh3.googleusercontent.com",
        "cdn.trustindex.io",
      ],
      remotePatterns: [
        {
          protocol: "https",
          hostname: "source.unsplash.com",
          pathname: "/**",
        },
        {
          protocol: "https",
          hostname: "images.unsplash.com",
          pathname: "/**",
        },
        {
          protocol: "https",
          hostname: "ext.same-assets.com",
          pathname: "/**",
        },
        {
          protocol: "https",
          hostname: "ugc.same-assets.com",
          pathname: "/**",
        },
        {
          protocol: "https",
          hostname: "lh3.googleusercontent.com",
          pathname: "/**",
        },
        {
          protocol: "https",
          hostname: "cdn.trustindex.io",
          pathname: "/**",
        },
      ],
    },
  };
  
  module.exports = nextConfig;
  