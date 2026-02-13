/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  reactCompiler: true,
  // === 添加以下配置 ===
  output: 'export',  // 关键：启用静态导出
  trailingSlash: true,  // 确保URL以斜杠结尾
  images: {
    unoptimized: true  // 静态导出时需要
  },
  basePath: process.env.NODE_ENV === 'production' ? '/real-time-fund' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/real-time-fund/' : '',
  // === 结束添加 ===
};

module.exports = nextConfig;
