# Teste Front-End Jr — Econverse

Esta é a minha implementação do teste técnico de Front-End Jr da Econverse.

**Demo:** https://teste-front-end-econverse-lucy.vercel.app/

Meu foco foi reproduzir o layout do Figma com o máximo de fidelidade possível, sem transformar a página em uma imagem estática. Os produtos continuam vindo do JSON oficial, o modal usa o item realmente selecionado e a interface mantém comportamento responsivo em telas menores.

## Tecnologias

- React
- TypeScript
- Vite
- Sass / SCSS
- Vitest
- React Testing Library

Não utilizei Bootstrap, Foundation, Tailwind ou outra biblioteca de UI.

## O que foi implementado

- header com benefícios, busca, navegação e ações da conta;
- banner principal;
- navegação por categorias;
- vitrines consumindo os produtos do JSON oficial;
- carrosséis horizontais;
- modal com nome, imagem, descrição e preço do produto clicado;
- controle de quantidade no modal;
- banners de parceiros;
- navegação por marcas;
- newsletter e footer;
- estados de carregamento e erro;
- HTML semântico e cuidados básicos de acessibilidade e SEO;
- layout responsivo para tablet e mobile.

## Fidelidade ao Figma

A referência principal de desktop foi trabalhada em 1440 px. Além da comparação visual, conferi no próprio inspetor do Figma medidas, pesos tipográficos, tamanhos, espaçamentos e dimensões de elementos importantes do layout e do popup.

Os arquivos de estilo estão separados por responsabilidade:

- `main.scss`: estilos-base e componentes;
- `desktop-reference.scss`: medidas específicas da referência desktop;
- `responsive.scss`: comportamento fora do frame de 1440 px;
- `design-fidelity.scss`: ajustes finais medidos no Figma;
- `semantic-classes.scss`: nomes semânticos usados no JSX, sem duplicar as regras pixel-perfect.

Nas classes dos componentes, procurei usar nomes que indiquem diretamente a responsabilidade do elemento, como `header-search`, `product-carousel__track`, `footer__social-links` e `product-modal__quantity`. Mantive apenas algumas classes utilitárias curtas quando elas realmente representam uma função genérica.

## Produtos e conteúdo dinâmico

O Figma contém textos e preços ilustrativos, como `Lorem ipsum`, `R$ 28,90` e `R$ 1.499,90`. Esses valores servem como referência visual do componente.

Na aplicação, nome, imagem, descrição e preço dos produtos são obtidos do JSON oficial da Econverse. Por isso, ao abrir um produto, o popup mostra os dados daquele item em vez de substituir o conteúdo dinâmico pelos placeholders do Figma.

Endpoint utilizado:

`https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json`

Em produção utilizo um rewrite para `/api/produtos.json`, mantendo a chamada same-origin e evitando problemas de CORS.

## Assets

Os assets estáticos usados no layout estão em `public/assets`, organizados por contexto (`brand`, `header`, `categories`, `banners`, `navigation`, `modal` e `footer`).

As imagens dos produtos permanecem externas porque fazem parte do conteúdo retornado pela API do teste.

## Como rodar o projeto

Requisitos: Node.js 20+ e npm.

```bash
npm ci
npm run dev
```

Depois disso, o Vite mostra no terminal o endereço local da aplicação.

## Testes

A suíte cobre os comportamentos principais da entrega: carregamento do JSON, tratamento de erro, renderização da vitrine, escolha do produto, conteúdo do modal, controle de quantidade e fechamento do popup.

Para executar:

```bash
npm test
```

Para executar em modo watch:

```bash
npm run test:watch
```

## Build de produção

```bash
npm run build
```

O comando executa a verificação do TypeScript antes de gerar o build do Vite.

Para visualizar o build localmente:

```bash
npm run preview
```

O workflow de CI do GitHub também executa `npm ci`, `npm test` e `npm run build` a cada alteração enviada para `main` ou pull request direcionado a ela.

## Estrutura principal

```text
src/
├── components/      # componentes da interface
├── hooks/           # carregamento e normalização dos produtos
├── styles/          # SCSS base, responsivo e calibração do Figma
├── test/            # configuração dos testes
├── types/           # tipos TypeScript
├── App.tsx
└── assets.ts

public/assets/        # imagens e ícones do layout
```

## Validação final

Antes da entrega, revisei a aplicação em 1440 px, o estado do modal, tipografia, sombras, cores, ícones, footer, dados dinâmicos, testes e build de produção.
