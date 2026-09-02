const CHALLENGE_ASSETS = 'https://raw.githubusercontent.com/williamsimass/econverse-vitrine/81fb84c4e45b4c41c0953b378fcebccaf432c7c5/src/assets';
const UI_ASSETS = 'https://raw.githubusercontent.com/Epiled/econverse/7d420e578586f2aa54174064812281e46eec9e2e/src/assets/svg/icons-ui';

export const assets = {
  logo: `${CHALLENGE_ASSETS}/logo-econverse.svg`,
  hero: `${CHALLENGE_ASSETS}/banner-hero.webp`,
  partner: `${CHALLENGE_ASSETS}/banner-parceiros.webp`,
  chevron: `${CHALLENGE_ASSETS}/icon-chevron.svg`,
  categories: {
    tecnologia: `${CHALLENGE_ASSETS}/cat-tecnologia.png`,
    supermercado: `${CHALLENGE_ASSETS}/cat-supermercado.png`,
    bebidas: `${CHALLENGE_ASSETS}/cat-bebidas.png`,
    ferramentas: `${CHALLENGE_ASSETS}/cat-ferramentas.png`,
    saude: `${CHALLENGE_ASSETS}/cat-saude.png`,
    esportes: `${CHALLENGE_ASSETS}/cat-esportes.png`,
    moda: `${CHALLENGE_ASSETS}/cat-moda.png`,
  },
  shield: `${CHALLENGE_ASSETS}/icon-shield.svg`,
  truck: `${CHALLENGE_ASSETS}/icon-truck.svg`,
  creditCard: '/assets/icon-credit-card.svg',
  wallet: `${CHALLENGE_ASSETS}/icon-wallet.svg`,
  heart: `${CHALLENGE_ASSETS}/icon-heart.svg`,
  user: `${CHALLENGE_ASSETS}/icon-user.svg`,
  cart: `${CHALLENGE_ASSETS}/icon-cart.svg`,
  crown: `${CHALLENGE_ASSETS}/icon-crown.svg`,
  search: '/assets/icon-search.svg',
  close: `${UI_ASSETS}/close.svg`,
  instagram: `${CHALLENGE_ASSETS}/icon-instagram.svg`,
  facebook: `${CHALLENGE_ASSETS}/icon-facebook.svg`,
  linkedin: `${CHALLENGE_ASSETS}/icon-linkedin.svg`,
} as const;
