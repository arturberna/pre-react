import { Login, Dashboard, Config, Produto,Vendas, state } from './components.js';

const routes = {
    '#/login': Login,
    '#/dashboard': Dashboard,
    '#/config': Config,
    "#/produto": Produto,
    "#/vendas": Vendas,
};

export function navigate() {
    const root = document.getElementById('root');
    const hash = window.location.hash || '#/login'; // Rota padrão
    console.log('Navegando para:', hash);
    // Proteção simples: Se não estiver logado, manda pro login
    if (!state.isLoggedIn && hash !== '#/login') {
        window.location.hash = '#/login';
        return;
    }

    const component = routes[hash] || Login;
    root.innerHTML = component();

    // Lógica para capturar o clique do botão de login após renderizar
    if (hash === '#/login') {
        document.getElementById('btn-login').addEventListener('click', () => {
            state.user = document.getElementById('username').value || "Usuário";
            state.isLoggedIn = true;
            window.location.hash = '#/dashboard';
        });
    }
    // lógica para capturar o clique do botão de logout após renderizar
    if (hash === '#/dashboard') {
        const logoutBtn = document.getElementById('btn-logout');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', handleLogout);
        }
    }
}
// Função para deslogar
const handleLogout = () => {
    // 1. Resetar o estado
    state.isLoggedIn = false;
    state.user = "Visitante";

    // 2. Redirecionar para o login via Hash
    window.location.hash = '#/login';
};