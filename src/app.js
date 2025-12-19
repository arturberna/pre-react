import { navigate } from './router.js';

// Escuta mudanças na URL (quando o usuário clica em links)
window.addEventListener('hashchange', navigate);

// Executa a navegação assim que a página carrega pela primeira vez
window.addEventListener('load', navigate);