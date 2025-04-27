import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    // 只检查管理页面的访问
    if (request.nextUrl.pathname.startsWith('/admin')) {
        // 排除登录页面和API路由
        if (!request.nextUrl.pathname.startsWith('/admin/login') && 
            !request.nextUrl.pathname.startsWith('/admin/api')) {
            
            // 检查认证cookie
            const isAuthenticated = request.cookies.get('admin_auth')?.value === 'true'
            
            if (!isAuthenticated) {
                // 重定向到登录页面
                const loginUrl = new URL('/admin/login', request.url)
                return NextResponse.redirect(loginUrl)
            }
        }
    }

    return NextResponse.next()
}

// 配置需要进行中间件检查的路径
export const config = {
    matcher: '/admin/:path*'
}