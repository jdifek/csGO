// middleware.ts
export function middleware(request) {
  console.log('Middleware triggered for:', request.url);
  return new Response('Middleware working', { status: 200 });
}

export const config = {
  matcher: ['/'],
};