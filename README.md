# E-Commerce de Discos

Um projeto simples de uma vitrine virtual para venda de discos (álbuns musicais), desenvolvido com foco em praticar os conceitos fundamentais de desenvolvimento web, manipulação do DOM e consumo de dados de um arquivo local.

## Funcionalidades

- Exibição de 5 produtos (discos) com imagem, nome do artista, álbum, estilo musical, preço e número de músicas.
- Carregamento dinâmico dos dados: Os produtos não estão fixos no HTML, eles são lidos de um arquivo `.json` externo.
- Botão interativo: Ao clicar em "Comprar", o usuário recebe um alerta personalizado confirmando o produto escolhido.

## Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias:

- **HTML5:** Estruturação da página e dos cartões de produtos.
- **CSS3:** Estilização visual e layout usando Flexbox.
- **JavaScript:** Lógica da página, eventos de clique e requisição de dados.
- **JSON:** Armazenamento estruturado dos dados dos produtos.
- **Fetch API:** Método utilizado no JavaScript para buscar os dados do arquivo JSON de forma assíncrona.

## Estrutura do Projeto

```text
/
├── index.html       # Estrutura principal da página
├── style.css        # Arquivo de estilos da loja
├── script.js        # Lógica de carregamento e eventos dos botões
├── dados.json       # Arquivo com as informações dos discos
└── img/             # Pasta contendo as capas dos álbuns
