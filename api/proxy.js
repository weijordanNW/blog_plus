// 该服务为 vercel serve跨域处理
import { createProxyMiddleware } from 'http-proxy-middleware'
export default (req, res) => {
  let target = ''
  if (req.url.startsWith('/bing')) { // 必应
    target = 'https://cn.bing.com'
  }
  createProxyMiddleware({// 代理配置
    target,// 目标地址
    changeOrigin: true,// 跨域
    pathRewrite: {// 重写路径
      '^/bing/': '/'
    }
  })(req, res)
}