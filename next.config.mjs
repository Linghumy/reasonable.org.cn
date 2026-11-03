import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'q1.qlogo.cn',
                port: '',
                pathname: '/g/**',
            },
        ],
    },
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

// const withMDX = require('@next/mdx')()
 
// module.exports = withMDX(nextConfig)

// export default nextConfig;

const withMDX = createMDX({
    // Add markdown plugins here, as desired
  })
   
  // Merge MDX config with Next.js config
  export default withMDX(nextConfig)
