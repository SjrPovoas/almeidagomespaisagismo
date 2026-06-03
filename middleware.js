export const config = {
  matcher: '/admin.html',
};

export default function middleware(request) {
  const url = new URL(request.url);
  
  // Obtém as credenciais das variáveis de ambiente
  const basicAuth = request.headers.get('authorization');
  const user = process.env.ADMIN_USER;
  const password = process.env.ADMIN_PASS;

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1];
    const [decodedUser, decodedPassword] = atob(authValue).split(':');

    if (decodedUser === user && decodedPassword === password) {
      return new Response(null, { status: 200 }); // Acesso permitido
    }
  }

  // Se não autenticado, solicita login
  return new Response('Auth Required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Acesso Restrito"',
    },
  });
}