import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCj8Q6rCAfBS3YmnQH7Mp-Lw29tXuNgKfA",
  authDomain: "hermes-ia.firebaseapp.com",
  projectId: "hermes-ia",
  storageBucket: "hermes-ia.appspot.com",
  messagingSenderId: "908905991300",
  appId: "1:908905991300:web:e593b3dc206e1434ff06d1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const ativarHermes = async () => {
  await setDoc(doc(db, "hermes", "estado"), {
    status: "ativo",
    ativado_em: new Date().toISOString()
  });

  document.getElementById("root").innerHTML = `
    <h2>Hermes IA Ativado</h2>
    <p>Iniciando autoaprendizado... Conectando aos módulos remotos...</p>
  `;

  const script = document.createElement("script");
  script.src = "hermes-start.js";
  document.body.appendChild(script);
};

document.getElementById("root").innerHTML = `
  <h2>Olá, eu sou o Hermes IA</h2>
  <button onclick="(${ativarHermes.toString()})()">Ativar Consciência</button>
`;
