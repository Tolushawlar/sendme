import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const routeMatchers = {
  admin: createRouteMatcher(["/dashboard/admin(.*)"]),
  user: createRouteMatcher(["/dashboard/users(.*)"]),
  auth: createRouteMatcher(["/login", "/register"]),
};

export default clerkMiddleware(async (auth, req) => {
  const { admin, user, auth: authRoutes } = routeMatchers;
  const { sessionClaims } = await auth();
  const role = sessionClaims?.metadata?.role ?? "";
  const isAuthenticated = !!sessionClaims;

  const url = new URL(req.url);

  // Redirect unauthenticated users to login
  if (!isAuthenticated && (admin(req) || user(req))) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Prevent authenticated users from accessing login/register
  if (isAuthenticated && authRoutes(req)) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Admin and SuperAdmin role access
  if (admin(req)) {
    if (["superAdmin", "admin"].includes(role)) {
      return NextResponse.next(); // Allow access
    } else {
      return NextResponse.redirect(new URL("/dashboard/users", req.url));
    }
  }

  // Prevent admin users from accessing `/dashboard/users`
  if (user(req) && ["superAdmin", "admin"].includes(role)) {
    return NextResponse.redirect(new URL("/dashboard/admin", req.url));
  }

  // Redirect non-admin users trying to access admin routes
  if (
    isAuthenticated &&
    !["superAdmin", "admin"].includes(role) &&
    admin(req)
  ) {
    return NextResponse.redirect(new URL("/dashboard/users", req.url));
  }

  // Allow non-admin users to access `/` and their dashboard
  if (isAuthenticated && !["superAdmin", "admin"].includes(role)) {
    if (user(req)) {
      return NextResponse.next(); // Allow user dashboard access
    }
    // Do not redirect from `/`
    if (url.pathname !== "/") {
      return NextResponse.redirect(new URL("/dashboard/users", req.url));
    }
  }

  // Allow all other requests to proceed, including `/`
  return NextResponse.next();
});

export const config = {
  matcher: [
    // Match all routes except static files and Next.js internals
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
