const ideias = [
  "Review de consoles da nova geração",
  "Top 5 jogos indies de 2026",
  "Comparação de placas de vídeo para gamers",
  "História dos jogos retrô",
  "Testando acessórios gamer"
];

let usadas = [];
let ideiaAtual = "";

function novaIdeia() {
  if (usadas.length === ideias.length) usadas = [];
  let restante = ideias.filter(i => !usadas.includes(i));
  let sorteio = restante[Math.floor(Math.random() * restante.length)];
  usadas.push(sorteio);
  ideiaAtual = sorteio;

  document.getElementById("output").innerText = "💡 Ideia: " + sorteio;
  document.getElementById("roteiro").innerText =
    "📜 Roteiro:\nIntrodução: Apresente \"" + sorteio + "\".\nPasso 1: Explique.\nPasso 2: Mostre exemplos.\nConclusão: Convide o público.";
}

function gerarCapa() {
  if (!ideiaAtual) {
    document.getElementById("capa").innerText = "⚠️ Primeiro gere uma ideia!";
    return;
  }
  const imagens = [
    "https://picsum.photos/seed/console/400/250",
    "https://picsum.photos/seed/indie/400/250",
    "https://picsum.photos/seed/gpu/400/250",
    "https://picsum.photos/seed/retro/400/250",
    "https://picsum.photos/seed/accessories/400/250"
  ];
  let sorteio = imagens[Math.floor(Math.random() * imagens.length)];
  document.getElementById("capa").innerHTML =
    "🎨 Capa para \"" + ideiaAtual + "\":<br><img src='" + sorteio + "'>";
}
