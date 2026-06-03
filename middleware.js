import { NextResponse } from 'next/server';

export default function middleware(request) {
  const basicAuth = request.headers.get('authorization');
  const user = process.env.ADMIN_USER;
  const password = process.env.ADMIN_PASS;

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1];
    const [decodedUser, decodedPassword] = atob(authValue).split(':');

    if (decodedUser === user && decodedPassword === password) {
      // ESTA É A CORREÇÃO:
      return NextResponse.next(); 
    }
  }

  return new Response('Auth Required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Acesso Restrito"',
    },
  });
}