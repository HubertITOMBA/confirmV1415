import { NextResponse } from "next/server";

export function middleware(request) {
    console.log(request);
    let isAuthenticated = false;


    if (!isAuthenticated) {
        // Redirect to login
    }
    return NextResponse.next();
    
}