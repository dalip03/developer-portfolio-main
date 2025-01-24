const path = require('path');

module.exports = {
  // Configure Sass options
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

  distDir: 'build',
  productionBrowserSourceMaps: true,
  // Enable React strict mode
  reactStrictMode: true,

  // Configure image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media.dev.to',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media2.dev.to',
        pathname: '**',
      },
    ],
  },
};
