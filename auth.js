import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';
const firebaseConfig = { apiKey:'SUA_API_KEY', authDomain:'SEU_DOMINIO.firebaseapp.com', projectId:'SEU_ID', appId:'SEU_APPID' };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
window.register=e=>{e.preventDefault();createUserWithEmailAndPassword(auth,user.value,pass.value).then(()=>location='dashboard.html').catch(a=>alert(a.message))}
window.login=e=>{e.preventDefault();signInWithEmailAndPassword(auth,user.value,pass.value).then(()=>location='dashboard.html').catch(()=>alert('Erro'))}
window.protect=()=>onAuthStateChanged(auth,u=>{if(!u)location='login.html';else username.innerText=u.email})
window.logout=()=>signOut(auth).then(()=>location='login.html')