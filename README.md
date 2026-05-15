# Almeida Gomes Paisagismo
Empresa de Jardinagem localizada em Águas Lindas-GO, Brasil

<p align="center">
  <img src="/assets/img/logo-escura.webp" width="300px" height="300px">
</p>

---
## SOBRE O PROJETO
Site web2 desenvolvido para a empresa de Jardinagem <a href="https://almeidagomespaisagismo.com.br" target="_blank">Almeida Gomes Paisagismo</a>.


---
## CONECTE-SE COMIGO
<div>
  <a href="https://www.linkedin.com/in/sjrpovoas" target="_blank"><img src="https://img.shields.io/twitter/follow/sjrpovoas?style=for-the-badge&label=linkedin&labelColor=2196f3&color=2196f3&link=https%3A%2F%2Fwww.x.com%2Fsjrpovoas" target="_blank"></a>
  <a href="https://www.x.com/sjrpovoas" target="_blank"><img src="https://img.shields.io/twitter/follow/sjrpovoas?style=for-the-badge&logo=X&logoSize=250&label=%2F%20Twitter&labelColor=000000&color=000000&cacheSeconds=3600&link=https%3A%2F%2Fx.com%2Fsjrpovoas" target="_blank"></a>
  <a href="https://github.com/SjrPovoas" target="_blank"><img src="https://img.shields.io/twitter/follow/SjrPovoas?style=for-the-badge&logo=github&logoColor=%23ffffffff&logoSize=250&label=github&labelColor=%23666666&color=%23666666&cacheSeconds=3600&link=https%3A%2F%2Fgithub.com%2FSjrPovoas"></a>
  <a href="https://www.instagram.com/silviopovoasjunior" target="_blank"><img src="https://img.shields.io/twitter/follow/silviopovoasjunior?style=for-the-badge&logo=instagram&logoColor=%23ffffffff&logoSize=250&label=instagram&labelColor=%23ff6c3f&color=%23ff6c3f&cacheSeconds=3600&link=https%3A%2F%2Fwww.instagram.com%2Fsilviopovoasjunior" target="_blank"></a>
</div>

---
## AGRADECIMENTOS
<div>
  Ao <a href="https://almeidagomespaisagismo.com.br/#quem-somos" target="_blank">Manoel Gomes</a> pela confiança em nossos serviços. 
</div>

<br>
<br>

---
## SUMÁRIO
👋 Bem-vindo ao repositório!
Se encontrar algum problema ou tiver alguma dúvida, por favor compartilhe conosco na aba [discussões/issues](https://github.com/SjrPovoas/almeidagomespaisagismo/issues).

1. [Configurando conexão VScode com Github](https://github.com/SjrPovoas/almeidagomespaisagismo/#1-configurando-conexao-vscode-com-github)
2. [Tecnologias Usadas](https://github.com/SjrPovoas/almeidagomespaisagismo/#2-tecnologias-usadas)
3. [Recursos Utilizados na parte Visual](https://github.com/SjrPovoas/almeidagomespaisagismo/#3-recursos-utilizados-na-parte-visual)

---
## 1. CONFIGURANDO CONEXÃO VSCODE COM GITHUB

**Para clonar esse Projeto, use:**

```
  git clone https://github.com/SjrPovoas/almeidagomespaisagismo.git
```

### 1. Verifique a configuração do Git
Antes de fazer login, é importante verificar se você configurou seu nome de usuário e endereço de e-mail no Git.

Você pode fazer isso com os seguintes comandos, substituindo "Seu Nome" e "seu@email.com" pelas suas informações reais:
```
  git config --global user.name  *"Seu Nome"*
  git config --global user.email *"usuario@email.com"*
```
```
  git config --list // Pra certificar que os dados foram salvos
```

### 2. Fazendo o primeiro Commit

1. Inicializar um novo repositório Git no diretório atual.
```
  git init
```
2. Adicionar todos os arquivos modificados e novos à área de stage.
```
  git add .
```
3. Criar um novo commit com os arquivos na área de stage e uma mensagem de commit.
```
  git commit -m "Mensagem de commit"
```
4. Adicionar um repositório remoto ao seu projeto.
```
  git remote add <nome> <URL do repositório>
```
5. Empurrar seus commits para o repositório remoto.
```
  git push -u origin main
```

Esses são apenas alguns dos comandos mais comuns do **Git** que você pode usar na linha de comando.

---
## 2. TECNOLOGIAS USADAS

<details>
<summary>FRONTEND</summary>
<ul>
<li>HTML</li>
<li>CSS</li>
</ul>
</details>

<details>
<summary>BACKEND</summary>
<ul>
<li>JAVASCRIPT</li>
</ul>
</details>

---
## 3. RECURSOS UTILIZADOS NA PARTE VISUAL

<details>
<summary>FONTS</summary>

  - [Google Fonts](https://fonts.google.com/)

</details>

<details>
<summary>BOTÕES</summary>

  - [Bootstrap](https://icons.getbootstrap.com/)

</details>

<details>
<summary>GERADOR DE LINK DE WHATSAPP</summary>

  - [Zap Convertte](https://zap.convertte.com.br/gerador-link-whatsapp/)

</details>

<details>
<summary>GERADOR DE BOTÃO DE REDE SOCIAIS</summary>

  - [Shields.io](https://shields.io/badges)

</details>

<details>
<summary>CONSULTA A PALETA DE CORES</summary>

  - [Paleta de Cores](https://paletadecolores.online/)

</details>

---

## 4. CONFIGURAÇÃO DE REDIRECIONAMENTO

****
<details>
<summary>DOMÍNIO | CONFIGURAÇÃO | DESTINO</summary>
<ul>
<li>almeidagomespaisagismo.com.br	| Connect to Production	| (Nenhum, ele é o principal)</li>
<li>www.almeidagomespaisagismo.com.br	| Redirect (301)	| almeidagomespaisagismo.com.br</li>
</ul>
</details>

## 5. FLUXO DE ENVIO E RECEBIMENTO DE EMAIL CORPORATIVO

<details>
<summary>ZOHO EMAIL</summary>
<ul>
<li><b>Serviço de encaminhamento (RELAY)</b>
<br>
Ele não possui uma caixa de entrada para fazer login e ler e-mails. Ele apenas recebe a mensagem enviada para o seu domínio e a "empurra" instantaneamente para outro endereço (como o seu Gmail Corporativo).
<br>
O foco principal é o recebimento. Para responder ou enviar e-mails usando o seu domínio através dele, você configura o SMTP de outro provedor ou usa os recursos de "Enviar como" do Gmail.
<br>
Oferece um plano gratuito generoso com aliases ilimitados.
<br>
Uso do Alias Global (Catch-all): Uma função muito comum aqui é o "catch-all". Você pode configurar um asterisco (*@seudominio.com). Assim, qualquer coisa que inventar antes do "@" (como teste@, suporte@, vendas@) será entregue na sua conta principal, sem você precisar criar um por um.
</li>
</ul>
<ul>
<li><b>Verificação de Domínio (Obrigatório primeiro)</b>
<br>
Nome: @ ou zb******* (o Zoho te dará esse código)
<br>
Valor: zoho-verification=zb********.zmverify.zoho.com
</li>
<li><b>Registros MX</b>
<br>
Prioridade | Host/Nome | Valor (Destino)
<br>
10 | @ | mx.zoho.com
<br>
20 | @ | mx2.zoho.com
<br>
50 | @ | mx3.zoho.com
</li>
<li><b>Registro TXT (DKIM) para que você possa enviar e-mails sem ser bloqueado pelos servidores de destino</b>
<br>
Nome: zmail._domainkey
<br>
Valor: chave criptográfica longa
</li>
<li><b>Registro TXT (SPF) para garantir que os e-mails não caiam no spam</b>
<br>
Nome: @
<br>
Valor: v=spf1 include:zoho.com -all
<br>
<br>
<b>ATT:</b> Após inserir os registros, você precisa clicar em "Verificar" no painel administrativo deles.
<br>
<br>
</li>
<li><b>Configurações do Servidor SMTP (Google)</b>
<br>
Servidor SMTP:	smtp.gmail.com
<br>
Porta (SSL):	465
<br>
Porta (TLS/STARTTLS):	587 (Recomendada para Next.js/Node.js)
<br>
Requer Autenticação:	Sim
<br>
Usuário: serralheriaesoldagens@gmail.com
<br>
Senha: Senha de App de 16 dígitos (não é a senha da conta gmail)
</li>
</ul>
</details>

---
## 7. CONHEÇA O TIME

Nome | Título | Linkedin | X/Twitter | GitHub | Instagram
---|---|---|---|---|---
Silvio Povoas | Desenvolvedor | [sjrpovoas](https://www.linkedin.com/in/sjrpovoas) | [sjrpovoas](https://www.x.com/sjrpovoas) | [SjrPovoas](https://github.com/SjrPovoas) | [@silviopovoasjunior](https://www.instagram.com/silviopovoasjunior)
Manoel Gomes | Empresário | X | X | X | [@almeidagomespaisagismo](https://www.instagram.com/almeidagomespaisagismo)

***
Última atualização: 15/05/2026 - 13:43
<p align="center">
  &COPY; 2026 SjrPovoaS
</p>