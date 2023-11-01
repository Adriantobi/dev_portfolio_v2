/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.icons8.com',
                port: '',
                pathname: '/3d-fluency/1x/**',
            },
            {
                protocol: 'https',
                hostname: 'media.licdn.com',
                port: '',
                pathname: 'dms/image/**',
            },
            {
                protocol: 'https',
                hostname: 'cdn3d.iconscout.com',
                port: '',
                pathname: '/3d/free/thumb/**',
            }
        ],
    },
}

module.exports = nextConfig
