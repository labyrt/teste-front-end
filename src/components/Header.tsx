import { assets } from '../assets';

const benefits = [
  { icon: assets.shield, prefix: 'Compra', highlight: '100% segura' },
  { icon: assets.truck, prefix: '', highlight: 'Frete grátis', suffix: 'acima de R$ 200' },
  { icon: assets.wallet, prefix: '', highlight: 'Parcele', suffix: 'suas compras' },
];

const navItems = [
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
      <div className="top-benefits" aria-label="Benefícios da loja">
        {benefits.map((benefit) => (
          <div className="benefit" key={`${benefit.highlight}-${benefit.prefix}`}>
            <img src={benefit.icon} alt="" aria-hidden="true" />
            <span>
              {benefit.prefix && `${benefit.prefix} `}
              <strong>{benefit.highlight}</strong>
              {benefit.suffix && ` ${benefit.suffix}`}
            </span>
          </div>
        ))}
      </div>

      <div className="header-main shell">
        <a className="brand" href="#top" aria-label="Econverse - início">
          <img src={assets.logo} alt="Econverse" />
        </a>

        <label className="search-field">
          <span className="sr-only">Buscar produtos</span>
          <input type="search" placeholder="O que você está buscando?" />
          <img src={assets.search} alt="" aria-hidden="true" />
        </label>

        <div className="header-actions" aria-label="Ações da conta">
          <button type="button" aria-label="Pedidos"><img src={assets.wallet} alt="" /></button>
          <button type="button" aria-label="Favoritos"><img src={assets.heart} alt="" /></button>
          <button type="button" aria-label="Minha conta"><img src={assets.user} alt="" /></button>
          <button type="button" aria-label="Carrinho"><img src={assets.cart} alt="" /></button>
        </div>
      </div>

      <nav className="category-nav" aria-label="Categorias principais">
        <div className="category-nav__scroll shell">
          {navItems.map((item) => (
            <a key={item} className={item === 'Ofertas do dia' ? 'is-active' : ''} href="#produtos">
              {item}
            </a>
          ))}
          <a className="subscription" href="#newsletter">
            <img src={assets.crown} alt="" aria-hidden="true" />
            Assinatura
          </a>
        </div>
      </nav>
    </header>
  );
}
