import { NextResponse } from "next/server";

export function middleware(request) {
    if(!request.cookies.has("sistemaestoque_token")){
        return NextResponse.redirect(new URL('/login', request.url))
    }
}

export const config = {
  matcher: [
    '/itens/:path*',
    '/usuarios/:path*',
    '/contas/:path*',
  ]
}