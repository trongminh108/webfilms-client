/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'webserver-l2tp.onrender.com',
                port: '',
                pathname: '/files/**',
            },
        ],
    },
    experimental: {
        appDir: true,
    },
};

module.exports = nextConfig;
