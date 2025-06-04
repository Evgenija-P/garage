import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '5050',
        pathname: '/images/cars/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/assets/images/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'garage-server-lqy3.onrender.com',
        // port: '3000',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'garage-server-lqy3.onrender.com',
        // port: '5050',
        pathname: '/images/cars/**',
      },
    ],
  },
};

export default withNextIntl(nextConfig);
