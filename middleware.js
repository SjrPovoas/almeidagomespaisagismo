export const config = {
  matcher: '/admin.html',
};

export default async function middleware(request) {
  const basicAuth = request.headers.get('authorization');
  const user = process.env.ADMIN_USER;
  const password = process.env.ADMIN_PASS;

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1];
    // Decodifica o base64
    const [decodedUser, decodedPassword] = atob(authValue).split(':');

    if (decodedUser === user && decodedPassword === password) {
      // Retorna 'null' para deixar o request original (o admin.html) passar
      return new Response(null); 
    }
  }

  // Se a senha falhar ou não existir, pede autenticação
  return new Response('Auth Required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Acesso Restrito"',
    },
  });
}