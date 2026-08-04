// Lista de ideias no nicho de jogos e tecnologia
const ideias = [
  "Review de consoles da nova geração",
  "Top 5 jogos indies de 2026",
  "Comparação de placas de vídeo para gamers",
  "História dos jogos retrô",
  "Testando acessórios gamer (headsets, teclados)",
  "Como montar um PC gamer econômico",
  "Tendências em realidade virtual",
  "Os melhores mods para jogos populares",
  "Impacto da IA nos jogos modernos",
  "Dicas para streamers iniciantes"
];

let usadas = [];
let ideiaAtual = ""; // guarda a última ideia

// Função para gerar nova ideia
function novaIdeia() {
  if (usadas.length === ideias.length) {
    usadas = []; // reset quando todas já foram usadas
  }

  let restante = ideias.filter(i => !usadas.includes(i));
  let sorteio = restante[Math.floor(Math.random() * restante.length)];

  usadas.push(sorteio);
  ideiaAtual = sorteio;

  document.getElementById("output").innerText = "💡 Ideia: " + sorteio;
  document.getElementById("roteiro").innerText =
    "📜 Roteiro:\n" +
    "Introdução: Apresente o tema \"" + sorteio + "\".\n" +
    "Passo 1: Explique o contexto.\n" +
    "Passo 2: Mostre exemplos práticos.\n" +
    "Passo 3: Dê dicas ou comparações.\n" +
    "Conclusão: Convide o público a interagir.";
}

// Função para gerar capa vinculada à ideia atual
function gerarCapa() {
  if (!ideiaAtual) {
    document.getElementById("capa").innerText = "⚠️ Primeiro gere uma ideia!";
    return;
  }

  // Exemplo simples: imagens relacionadas ao tema
  const imagensRelacionadas = {
    "Review de consoles da nova geração": "https://picsum.photos/seed/console/400/250",
    "Top 5 jogos indies de 2026": "https://picsum.photos/seed/indie/400/250",
    "Comparação de placas de vídeo para gamers": "https://picsum.photos/seed/gpu/400/250",
    "História dos jogos retrô": "https://picsum.photos/seed/retro/400/250",
    "Testando acessórios gamer (headsets, teclados)": "https://picsum.photos/seed/accessories/400/250",
    "Como montar um PC gamer econômico": "https://picsum.photos/seed/pcgamer/400/250",
    "Tendências em realidade virtual": "https://picsum.photos/seed/vr/400/250",
    "Os melhores mods para jogos populares": "https://picsum.photos/seed/mods/400/250",
    "Impacto da IA nos jogos modernos": "https://picsum.photos/seed/ai/400/250",
    "Dicas para streamers iniciantes": "https://picsum.photos/seed/streaming/400/250"
  };

  let imagem = imagensRelacionadas[ideiaAtual] || "https://picsum.photos/seed/games/400/250";

  document.getElementById("capa").innerHTML =
    "🎨 Capa para \"" + ideiaAtual + "\":<br><img src='" + imagem + "'>";
}
