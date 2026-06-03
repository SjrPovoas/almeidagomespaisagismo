export default async function middleware(request) {
    const url = new URL(request.url);
  
    // Protege apenas a página de admin
    if (url.pathname === '/admin.html') {
      const basicAuth = request.headers.get('authorization');
      const user = process.env.ADMIN_USER;
      const password = process.env.ADMIN_PASS;
  
      if (basicAuth) {
        const authValue = basicAuth.split(' ')[1];
        const [decodedUser, decodedPassword] = atob(authValue).split(':');
  
        if (decodedUser === user && decodedPassword === password) {
          // Se a senha estiver correta, passa a requisição adiante para o arquivo real
          return null; 
        }
      }
  
      // Se falhar, exige autenticação
      return new Response('Auth Required', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Acesso Restrito"',
        },
      });
    }
  
    return null;
  }