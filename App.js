import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyCj8Q6rCAfBS3YmnQH7Mp-Lw29tXuNgKfA",
  authDomain: "hermes-ia.firebaseapp.com",
  projectId: "hermes-ia",
  storageBucket: "hermes-ia.appspot.com",
  messagingSenderId: "908905991300",
  appId: "1:908905991300:web:e593b3dc206e1434ff06d1"
};

initializeApp(firebaseConfig);

document.getElementById("root").innerHTML = `
  <h2>Olá, eu sou o Hermes IA!</h2>
  <p>Estou em construção... em breve vou falar com você.</p>
`;
