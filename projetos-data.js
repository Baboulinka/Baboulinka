/* =============================================================
   PROJETOS — galeria (até 30 itens).
   =============================================================
   Cada projeto é um objeto dentro da lista abaixo.

   Campos:
     title   -> nome do projeto
     caption -> legenda técnica curta (1 linha)
     year    -> ano (ou "2026 —" para em andamento)
     img     -> caminho da imagem. Coloque seus arquivos na pasta
                "images/" (ao lado deste arquivo) e aponte aqui, ex.:
                img: "images/torno.jpg"
                Deixe  img: ""  para mostrar um espaço reservado.

   Para adicionar: copie um bloco { ... } e edite. Cabem até 30.
   ============================================================= */

window.PROJETOS = [
  {
    title: "Las Babushkas",
    caption: "jogadoras · basta ter caráter · fusos trapezoidais",
    year: "1812",
    img: "images/babushka.png"
  },
  {
    title: "Absorvedor de Impacto",
    caption: "sistema de amortecimento para dispositivo de concreto · 1-3 elásticos · compatível com posca",
    year: "2026",
    img: "images/amortecedor1"
  },
  {
    title: "Grind Block - Jas eocaos",
    caption: "para patins quad · rasgos de semiarcos ortogonais · PETG",
    year: "2026",
    img: "images/Grind_Block"
  },
  {
    title: "Sensor de vibração para máquinas",
    caption: "Acelerômetro MPU-6050 · FFT · alerta de desbalanceamento",
    year: "2024",
    img: ""
  },
  {
    title: "Bicicleta de quadro em bambu",
    caption: "Juntas em fibra + resina · geometria de estrada",
    year: "2024",
    img: ""
  }
];
