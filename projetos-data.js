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
    title: "Torno CNC de bancada",
    caption: "Estrutura em alumínio · controle GRBL · fusos trapezoidais",
    year: "2026",
    img: "images/babushka.png"
  },
  {
    title: "Braço robótico impresso em 3D",
    caption: "5 eixos · servos DS3218 · cinemática inversa em Python",
    year: "2025",
    img: ""
  },
  {
    title: "Coletor solar térmico",
    caption: "Serpentina de cobre · caixa isolada · ΔT ~ 38 °C",
    year: "2025",
    img: ""
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
