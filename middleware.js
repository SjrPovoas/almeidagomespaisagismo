export default async function middleware(request) {
    const url = new URL(request.url);
  
    // Protege apenas a página /admin.html
    if (url.pathname === '/admin.html') {
      const authHeader = request.headers.get('authorization');
      const user = process.env.ADMIN_USER;
      const password = process.env.ADMIN_PASS;
  
      if (authHeader) {
        const authValue = authHeader.split(' ')[1];
        const [decodedUser, decodedPassword] = atob(authValue).split(':');
  
        if (decodedUser === user && decodedPassword === password) {
          // CORREÇÃO: Em vez de Response(null), faremos um fetch interno do arquivo
          // Isso força o servidor a ler o conteúdo do admin.html e entregar ao navegador
          return fetch(new URL('/public/admin.html', request.url));
        }
      }
  
      return new Response('Auth Required', {
        status: 401,
        headers: { 'WWW-Authenticate': 'Basic realm="Acesso Restrito"' },
      });
    }
  
    return new Response(null, { status: 200 });
  }