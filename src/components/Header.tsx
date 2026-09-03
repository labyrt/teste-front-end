import { assets } from '../assets';

const storeBenefits = [
  { icon: assets.shield, prefix: 'Compra', highlight: '100% segura' },
  { icon: assets.truck, prefix: '', highlight: 'Frete grátis', suffix: 'acima de R$ 200' },
  { icon: assets.creditCard, prefix: '', highlight: 'Parcele', suffix: 'suas compras' },
];

const mainNavigationItems = [
  'Todas Categorias',
  'Supermercado',
  'Livros',
  'Moda',
  'Lançamentos',
  'Ofertas do dia',
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="store-benefits-bar" aria-label="Benefícios da loja">
        {storeBenefits.map((benefit) => (
          <div className="store-benefit" key={`${benefit.highlight}-${benefit.prefix}`}>
            <img src={benefit.icon} alt="" aria-hidden="true" />
            <span>
              {benefit.prefix && `${benefit.prefix} `}
              <strong>{benefit.highlight}</strong>
              {benefit.suffix && ` ${benefit.suffix}`}
            </span>
          </div>
        ))}
      </div>

      <div className="header-content layout-container">
        <a className="header-logo" href="#top" aria-label="Econverse - início">
          <img src={assets.logo} alt="Econverse" />
        </a>

        <label className="header-search">
          <span className="visually-hidden">Buscar produtos</span>
          <input type="search" placeholder="O que você está buscando?" />
          <img src={assets.search} alt="" aria-hidden="true" />
        </label>

        <div className="header-actions" aria-label="Ações da conta">
          <button type="button" aria-label="Pedidos"><img src={assets.orders} alt="" /></button>
          <button type="button" aria-label="Favoritos"><img src={assets.heart} alt="" /></button>
          <button type="button" aria-label="Minha conta"><img src={assets.user} alt="" /></button>
          <button type="button" aria-label="Carrinho"><img src={assets.cart} alt="" /></button>
        </div>
      </div>

      <nav className="main-navigation" aria-label="Categorias principais">
        <div className="main-navigation__links layout-container">
          {mainNavigationItems.map((item) => (
            <a key={item} className={item === 'Ofertas do dia' ? 'is-active' : ''} href="#produtos">
              {item}
            </a>
          ))}
          <a className="main-navigation__subscription" href="#newsletter">
            <img src={assets.crown} alt="" aria-hidden="true" />
            Assinatura
          </a>
        </div>
      </nav>
    </header>
  );
}
