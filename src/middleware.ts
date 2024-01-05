import { NextRequest, NextResponse } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/

export async function middleware(req: NextRequest) {
  if (
    req.nextUrl.pathname.startsWith('/_next') ||
    req.nextUrl.pathname.includes('/api/') ||
    PUBLIC_FILE.test(req.nextUrl.pathname)
  ) {
    return
  }

  const pathname = req.nextUrl.pathname
  const token = req.cookies.get('token')?.value

  const tokenIsValid = isTokenValid(token)

  if (tokenIsValid) {
    if (pathname === '/login') {
      return NextResponse.redirect(new URL('/', req.url))
    }
  } else {
    if (pathname === '/') {
      const response = NextResponse.redirect(new URL('/login', req.url))
      response.cookies.delete('token')
      return response
    }
  }

  return NextResponse.next()
}

function parseJwt(token: string) {
  try {
    return JSON.parse(atob(token.split('.')[1]))
  } catch (e) {
    return null
  }
}

function isTokenValid(token?: string): boolean {
  if (!token) return false
  const nowUnix = (+new Date() / 1e3) | 0
  const decodedToken = parseJwt(token)
  if (decodedToken === null) return false
  return decodedToken.exp > nowUnix
}
