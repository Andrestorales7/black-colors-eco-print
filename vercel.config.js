// vercel.config.js
export default {
  headers: [
    {
      source: '/images/(.*)',
      headers: [
        {
          key: 'Access-Control-Allow-Origin',
          value: '*',
        },
        {
          key: 'Cache-Control',
          value: 'public, max-age=86400',
        },
      ],
    },
  ],
};
