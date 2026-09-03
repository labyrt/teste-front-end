# Teste Front-End Jr — Econverse

Implementação do teste técnico para a vaga de Desenvolvedor(a) Front-End Jr da Econverse.

**Demo:** https://teste-front-end-econverse-lucy.vercel.app/

## Stack

- React
- TypeScript
- Vite
- Sass/SCSS
- Sem bibliotecas de UI

## Implementação

A interface foi desenvolvida a partir do layout oficial do Figma, preservando a referência desktop de 1440 px e adicionando comportamento responsivo para resoluções menores.

O projeto inclui:

- header, benefícios, busca e navegação;
- hero promocional;
- categorias;
- vitrines de produtos consumidas a partir do JSON oficial da Econverse;
- carrosséis de produtos;
- modal dinâmico com os dados do produto selecionado e controle de quantidade;
- banners de parceiros;
- navegação por marcas;
- newsletter e footer;
- HTML semântico, metadados básicos de SEO e cuidados de acessibilidade;
- estados de carregamento e erro da vitrine.

## Conteúdo dinâmico e referência visual

O Figma utiliza textos e valores ilustrativos, como `Lorem ipsum`, `R$ 28,90` nos cards e `R$ 1.499,90` no popup. Esses valores são placeholders de layout.

Conforme a especificação oficial do desafio, nome, descrição, imagem e preço exibidos nas vitrines e no modal são obtidos em runtime do JSON oficial e correspondem ao produto efetivamente selecionado. Por isso, o conteúdo de produto não é hardcoded apenas para reproduzir os placeholders do Figma; a geometria, tipografia, cores, espaçamentos, botões e estados visuais seguem a referência.

## Assets e organização visual

Os assets estáticos do layout estão versionados em `public/assets` e organizados por responsabilidade (`brand`, `header`, `categories`, `banners`, `navigation`, `modal` e `footer`). Eles foram exportados da referência de design fornecida para o teste, portanto a aplicação não depende de repositórios de terceiros para renderizar a interface.

As imagens e informações dos produtos permanecem dinâmicas e são lidas da resposta do endpoint oficial, como solicitado no desafio.

A folha de estilos possui um único ponto de entrada em `src/styles/index.scss`, que mantém uma ordem explícita de responsabilidades:

1. `main.scss` — fundações e componentes;
2. `desktop-reference.scss` — calibração da referência desktop de 1440 px;
3. `responsive.scss` — ajustes para larguras intermediárias, tablet e mobile;
4. `design-fidelity.scss` — fidelidade final de cores, orientação de ícones e métricas específicas do design.

## Como executar

Requisitos: Node.js 20+ e npm.

```bash
npm install
npm run dev
```

O Vite exibirá no terminal o endereço local da aplicação.

## Como compilar e validar

O build de produção também executa a verificação do TypeScript:

```bash
npm run build
```

Para conferir localmente o resultado compilado:

```bash
npm run preview
```

Checklist manual recomendado após iniciar a aplicação:

1. confirmar o carregamento da vitrine de produtos;
2. clicar em diferentes produtos e conferir se título, descrição, imagem e preço do modal correspondem ao item selecionado;
3. testar os controles de quantidade do modal;
4. fechar o modal pelo botão, pela tecla `Esc` e clicando no backdrop;
5. validar os carrosséis e o sentido correto das setas;
6. conferir cores, tipografia, footer e layout em 1440 px contra os exports `Home` e `Popup` do Figma;
7. conferir o comportamento em tablet/mobile.

## Dados

A vitrine utiliza o endpoint oficial informado no teste:

`https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json`

Em produção, a aplicação utiliza um rewrite em `/api/produtos.json` para manter a integração same-origin e evitar problemas de CORS.

## Design

Referência oficial: **Teste Front-End Jr — Econverse** no Figma. O layout desktop e o estado do modal foram tratados como referências visuais para a calibração de espaçamentos, tipografia, cores, botões e dimensões.
