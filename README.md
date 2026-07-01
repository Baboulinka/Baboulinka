# Baboulinka — site pessoal

Site estático em HTML + CSS puro. Não precisa de servidor nem instalação.
Para ver localmente, é só abrir `index.html` no navegador.

## Arquivos

- `index.html` — home
- `blog.html` — blog (lê `posts.js`)
- `projetos.html` — galeria (lê `projetos-data.js`)
- `musica.html` — composições e recomendações
- `contato.html` — email e WhatsApp
- `style.css` — aparência (cores, fontes). Raramente precisa mexer.
- `posts.js` — SEUS POSTS ficam aqui.
- `projetos-data.js` — SEUS PROJETOS ficam aqui.
- `images/` — crie esta pasta e coloque aqui as fotos dos projetos.

## Como editar

### Blog
Abra `posts.js`. Copie um bloco `{ ... }`, cole no topo da lista e edite.
`pinned: true` fixa o post em destaque no topo. Os demais são ordenados pela data.

### Projetos
Abra `projetos-data.js`. Copie um bloco `{ ... }` e edite.
Para a imagem: coloque o arquivo em `images/` e escreva `img: "images/nome.jpg"`.
Deixe `img: ""` para mostrar um espaço reservado. Cabem até 30.

### Composições e recomendações (Música)
Edite direto em `musica.html` (troque os `href="#"` e os textos).

### Contato
Edite `contato.html`: troque o email no `mailto:` e o número no link `wa.me`.

## Publicar no GitHub Pages
Veja o passo a passo enviado no chat.
