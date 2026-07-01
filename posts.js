/* =============================================================
   BLOG — edite este arquivo para publicar.
   =============================================================
   Cada post é um objeto dentro da lista abaixo.
   Os mais recentes aparecem no topo automaticamente (pela data).
   Marque  pinned: true  para FIXAR um post em destaque no topo.

   Campos:
     date   -> "AAAA-MM-DD"   (ex.: "2026-06-20")
     title  -> título do post
     body   -> texto. Separe parágrafos com UMA linha em branco.
     pinned -> true para fixar (opcional)

   Para adicionar um post: copie um bloco { ... }, cole no topo da
   lista, edite e salve o arquivo. Pronto.
   ============================================================= */

window.POSTS = [
  {
    pinned: true,
    date: "2026-06-20",
    title: "Por que documento tudo",
    body: `Documentar não é sobre memória. É sobre autoria.

Quando registro um projeto — o erro, a solução, o desperdício — eu assumo que aquilo foi meu. Num tempo em que quase tudo chega pronto e descartável, escrever o próprio processo é uma forma discreta de resistência.

Este espaço é isso: um caderno de bancada deixado aberto.`
  },
  {
    date: "2026-05-30",
    title: "Precisão é uma forma de respeito",
    body: `Aprendi mais tarde do que gostaria que apertar menos parafusos, com mais cuidado, quase sempre resolve.

A tolerância certa não é a mais apertada — é a que o projeto pede. Vale para uma peça no torno e vale para uma frase.

Fazer pouco, mas fazer inteiro.`
  },
  {
    date: "2026-05-12",
    title: "O maker contra o descartável",
    body: `Consertar é impopular. Dá trabalho, suja a mão, e no fim custa quase o preço de um novo.

Mas quando abro um equipamento e entendo por que ele parou, alguma coisa muda. Deixo de ser usuário e volto a ser autor.

O descartável nos quer passivos. A bancada nos devolve o verbo.`
  },
  {
    date: "2026-04-28",
    title: "Criatividade em tempos de petróleo",
    body: `Vivemos de energia barata e atenção cara. É fácil produzir muito e criar nada.

Guardo este site para não esquecer da criatividade e da autoria — para lembrar que a mão que projeta também assina.

Não é nostalgia. É método.`
  }
];
