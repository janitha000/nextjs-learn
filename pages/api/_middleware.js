import { getCookie } from 'cookies-next';
import { NextResponse } from 'next/server';

export function middleware(req, res) {
    let url = req.nextUrl;
    console.log(url.pathname)
    if(url.pathname === '/api/login') 
    {
        console.log('came');
        return NextResponse.next()
    }
   
    var cookie = getCookie('TestCookie', {req,res});
    console.log(cookie)
    if(cookie) return NextResponse.next();

    return new Response('Auth required', {
        status: 401,
        
      })
    

    
}