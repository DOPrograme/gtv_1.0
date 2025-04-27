import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'gtv2024admin' // 默认密码，建议通过环境变量设置

export async function POST(request: Request) {
    try {
        const { password } = await request.json()

        if (password === ADMIN_PASSWORD) {
            // Set a cookie to maintain login state
            cookies().set('admin_auth', 'true', {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'lax',
                maxAge: 60 * 60 * 24 // 24 hours
            })

            return NextResponse.json({ success: true })
        }

        return NextResponse.json(
            { success: false, message: 'Invalid password' },
            { status: 401 }
        )
    } catch (error) {
        console.error('Login error:', error)
        return NextResponse.json(
            { success: false, message: 'An error occurred' },
            { status: 500 }
        )
    }
}