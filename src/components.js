import "./style.css";
// Simulação de Estado Global (User)
export const state = {
    user: "Visitante",
    isLoggedIn: false
};

export const Login = () => `
    <div class="login-container">
        <h1>Login</h1>
        <input type="text" id="username" placeholder="Digite seu nome">
        <button id="btn-login">Entrar</button>
    </div>
`;

// src/components.js

export const Header = (userName) => `
    <header class="top-menu">
        <span>Meu App SPA</span>
        <div class="user-info">
            Olá, <strong>${userName}</strong>
            <a id="btn-logout" class="logout-link">Sair</a>
        </div>
    </header>
`;

export const Sidebar = () => `
    <aside class="side-menu">
        <nav>
            <ul>
                <li><a href="#/dashboard">Início</a></li>
                <li><a href="#/config">Configurações</a></li>
                <li><a href="#/vendas">Vendas</a></li>
                <li><a href="#/produto">Produtos</a></li>
            </ul>
        </nav>
    </aside>
`;

export const Dashboard = () => `
    <div class="dashboard-layout">
        ${Header(state.user)}
        <div class="main-content">
            ${Sidebar()}
            <main>
                <h2>Bem-vindo ao Painel Principal</h2>
                <p>Este conteúdo mudou sem recarregar a página!</p>
            </main>
        </div>
    </div>
`;

export const Config = () => `
    <div class="dashboard-layout">
        ${Header(state.user)}
        <div class="main-content">
            ${Sidebar()}
            <main> 
                <h2>Configurações</h2>
                <p>Ajuste suas preferências aqui.</p>
            </main>
        </div>
    </div>
`; 
export const Vendas = () => `
    <div class="dashboard-layout">
        ${Header(state.user)}
        <div class="main-content">
            ${Sidebar()}
            <main> 
                <h2>Vendas</h2>
                <p>Gerencie suas vendas aqui.</p>
                <input type="text" placeholder="Buscar vendas...">
                <button>Buscar</button>
            </main>
        </div>
    </div>
`; 

export const Produto = () => `
    <div class="dashboard-layout">
        ${Header(state.user)}
        <div class="main-content">
            ${Sidebar()}
            <main> 
                
                <h2>Produtos</h2>
                <p>Gerencie seus produtos aqui.</p>
                <input type="text" placeholder="Buscar produtos...">
                <button>Buscar</button>
            </main>
        </div>
    </div>
`; 