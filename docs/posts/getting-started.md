Guia de Início RápidoSiga estes passos para configurar um projeto semelhante em sua máquina local.Passo 1: Estrutura de ArquivosCrie uma estrutura de diretórios como a seguir. O arquivo index.html será a sua página principal, e os arquivos .md ficarão dentro de uma pasta posts./seu-projeto
|-- index.html
|-- /posts
|   |-- introduction.md
|   |-- getting-started.md
|   |-- ...outros arquivos.md
Passo 2: O HTML BásicoEm seu index.html, você precisará de um local para a navegação e outro para exibir o conteúdo.<!-- Barra Lateral de Navegação -->
<aside class="sidebar">
    <nav>
        <a href="posts/introduction.md">Introdução</a>
        <a href="posts/getting-started.md">Início Rápido</a>
    </nav>
</aside>

<!-- Área de Conteúdo Principal -->
<main id="content"></main>
Passo 3: O JavaScriptVocê precisará de um script para buscar e renderizar os arquivos. A lógica principal envolve:Adicionar um ouvinte de evento de clique aos links da navegação.Prevenir o comportamento padrão do link.Usar fetch() para obter o conteúdo do arquivo .md.Usar uma biblioteca como marked.js para converter o texto em HTML.Inserir o HTML resultante no elemento de conteúdo principal.Nota: Este é um exemplo simplificado. O código completo no arquivo principal contém mais detalhes e tratamento de erros.
