import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // 这行是核心，用于生成静态导出
  // 注意：使用 `next/image` 组件时，需要禁用其优化功能
  images: {
    unoptimized: true
  }
};

export default nextConfig;
