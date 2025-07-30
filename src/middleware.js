import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"

export const middleware = async (req) => {

    const token = await getToken({ req })
    if (token) {
        return NextResponse.next()
    } else{
        return NextResponse.redirect(new URL('/auth/login', req.url))
    }
}

// This config tells Next.js which routes the middleware should run on.
export const config = {
    matcher: [
        '/myBooking',
        '/myBooking/:path*',
        '/checkout/:path*'
    ],
}