const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  latex: true,
})

module.exports = {
  ...withNextra(),
  images: {
    unoptimized: true,
  },
   basePath: process.env.BASE_URL || ""
};
