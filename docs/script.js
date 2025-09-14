/*
    script.js
    O Cérebro da Pitchutcha Docs - Edição Global
*/

document.addEventListener('DOMContentLoaded', () => {
    // --- Estado, Config, Cache de UI e Textos i18n ---
    const config = {
        defaultLang: 'pt-BR',
        currentLang: 'pt-BR',
        // ...
    };
    const i18n = {
        'pt-BR': { editOnGithub: 'Editar esta página no GitHub', readingTime: 'Leitura de', minutes: 'min', /* ... */ },
        'en': { editOnGithub: 'Edit this page on GitHub', readingTime: 'min read', minutes: '', /* ... */ }
    };
    let contentIndex = []; // NOVIDADE: Índice para busca de conteúdo completo

    // --- Inicialização ---
    const init = async () => {
        // ... listeners de tema, modais, etc. ...
        
        // NOVIDADE: Regista o Service Worker para suporte offline
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js').then(reg => {
                console.log('Service Worker registado com sucesso:', reg.scope);
            }).catch(err => {
                console.error('Falha ao registar Service Worker:', err);
            });
        }
        
        // NOVIDADE: Indexa todo o conteúdo para a busca
        await buildContentIndex();

        // CORREÇÃO: Rola para a âncora no carregamento inicial
        const initialHash = window.location.hash.substring(1);
        navigateTo(initialHash || null, true); // O 'true' indica carregamento inicial
    };

    // --- NOVIDADE: Busca de Conteúdo Completo (Full-Text Search) ---
    const buildContentIndex = async () => { /* ... busca todos os .md, extrai texto e constrói o índice ... */ };
    const searchContent = (query) => { /* ... pesquisa no 'contentIndex', gera snippets e renderiza os resultados ... */ };

    // --- NOVIDADE: Internacionalização (i18n) ---
    const setLanguage = (lang) => { /* ... atualiza 'config.currentLang', UI, e recarrega o conteúdo ... */ };

    // --- Lógica de Navegação e Renderização ---
    const navigateTo = (path, isInitialLoad = false) => {
        const [articlePath, anchor] = path.split('#');
        // ...
        if (isInitialLoad && anchor) {
            // CORREÇÃO: Lógica para esperar o conteúdo e rolar para a âncora
            const observer = new MutationObserver(() => {
                const target = document.getElementById(anchor);
                if (target) {
                    target.scrollIntoView();
                    observer.disconnect();
                }
            });
            observer.observe(ui.contentArea, { childList: true, subtree: true });
        }
    };
    
    const postRenderSetup = (path) => {
        // ...
        updateMetaTags(path); // NOVIDADE: Meta Tags Dinâmicas
        calculateReadingTime(path); // NOVIDADE: Indicador de Tempo de Leitura
        initAnimations(); // NOVIDADE: Animações de Entrada
        // ...
    };

    // --- Implementação das Novas Funcionalidades ---
    const updateMetaTags = (path) => { /* ... extrai título/descrição e atualiza <head> ... */ };
    const calculateReadingTime = (path) => { /* ... conta palavras e exibe o tempo de leitura ... */ };
    const initAnimations = () => { /* ... usa Intersection Observer para ativar animações ... */ };
    
    // ... Estado Persistente da Barra Lateral (com localStorage) ...
    
    init(); // Inicia a aplicação
});
