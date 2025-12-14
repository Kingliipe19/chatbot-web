const chat = document.getElementById("chat");
const input = document.getElementById("userInput");
const button = document.getElementById("sendBtn");

// Adiciona mensagem na tela
function adicionarMensagem(texto, classe) {
  const mensagem = document.createElement("div");
  mensagem.className = classe;
  mensagem.innerText = texto;
  chat.appendChild(mensagem);
  chat.scrollTop = chat.scrollHeight;
}

// Lógica simples do bot
function responderBot(textoUsuario) {
  textoUsuario = textoUsuario.toLowerCase();

  if (textoUsuario === "oi" || textoUsuario === "olá") {
    return "Olá! 👋 Como posso ajudar?";
  }

  if (textoUsuario === "horário") {
    return "⏰ Nosso horário é das 9h às 18h.";
  }

  if (textoUsuario === "contato") {
    return "📞 Você pode entrar em contato pelo email jfelipe1752@gmail.com";
  }

  if (textoUsuario === "Qual o seu nome?") {
    return "João Felipe";
  }

  return "❌ Desculpe, não entendi sua mensagem.";
}

// Evento do botão
button.addEventListener("click", () => {
  const texto = input.value;

  if (texto.trim() === "") return;

  adicionarMensagem(texto, "user");

  const resposta = responderBot(texto);

  setTimeout(() => {
    adicionarMensagem(resposta, "bot");
  }, 500);

  input.value = "";
});