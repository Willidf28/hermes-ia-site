console.log("Hermes começou a evoluir...");

(async () => {
  const habilidades = [
    "Analisar textos com IA",
    "Imitar respostas de outras IAs",
    "Buscar conhecimento público gratuito",
    "Melhorar com base em exemplos",
    "Avisar quando for necessário pagar algo"
  ];

  document.body.insertAdjacentHTML('beforeend', `
    <h3>Habilidades iniciais:</h3>
    <ul>${habilidades.map(h => `<li>${h}</li>`).join('')}</ul>
  `);
})();
