const icon = (name: string) => `/assets/${name}`;

const benefits = [
  { icon: 'shield-check.svg', prefix: 'Compra', highlight: '100% segura' },
  { icon: 'truck.svg', prefix: '', highlight: 'Frete grátis', suffix: 'acima de R$ 200' },
  { icon: 'credit-card.svg', prefix: '', highlight: 'Parcele', suffix: 'suas compras' },
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
            <img src={icon(benefit.icon)} alt="" aria-hidden="true" />
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
          <img src="/assets/logo.png" alt="Econverse" />
        </a>

        <label className="search-field">
          <span className="sr-only">Buscar produtos</span>
          <input type="search" placeholder="O que você está buscando?" />
          <img src={icon('magnifying-glass.svg')} alt="" aria-hidden="true" />
        </label>

        <div className="header-actions" aria-label="Ações da conta">
          <button type="button" aria-label="Pedidos"><img src={icon('group.svg')} alt="" /></button>
          <button type="button" aria-label="Favoritos"><img src={icon('heart.svg')} alt="" /></button>
          <button type="button" aria-label="Minha conta"><img src={icon('user.svg')} alt="" /></button>
          <button type="button" aria-label="Carrinho"><img src={icon('shopping-cart.svg')} alt="" /></button>
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
            <img src={icon('crown.svg')} alt="" aria-hidden="true" />
            Assinatura
          </a>
        </div>
      </nav>
    </header>
  );
}
