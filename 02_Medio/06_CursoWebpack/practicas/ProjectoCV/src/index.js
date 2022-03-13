import Template from './templates/Template.js';
import './styles/main.css';//Esta configuración lo anexa directamente al index.html 
import './styles/vars.styl';//Esta configuración es para importar stylus 

(async function App() {
  const main = null || document.getElementById('main');
  main.innerHTML = await Template();
})();
