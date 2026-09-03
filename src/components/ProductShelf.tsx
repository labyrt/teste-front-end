import { useRef } from 'react';
import { assets } from '../assets';
import type { Product } from '../types/product';

interface ProductShelfProps {
  products: Product[];
  loading?: boolean;
  error?: string | null;
  showTabs?: boolean;
  onProductClick: (product: Product) => void;
}

const productCategories = ['celular', 'acessórios', 'tablets', 'NOTEBOOKS', 'TVs', 'Ver todos'];

function formatCurrency(value: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}

export default function ProductShelf({
  products,
  loading = false,
  error = null,
  showTabs = false,
  onProductClick,
}: ProductShelfProps) {
  const productListRef = useRef<HTMLDivElement>(null);

  function scrollProducts(direction: -1 | 1) {
    productListRef.current?.scrollBy({ left: direction * 322, behavior: 'smooth' });
  }

  return (
    <section
      className={`product-section layout-container${showTabs ? ' product-section--with-tabs' : ''}`}
      id={showTabs ? 'produtos' : undefined}
    >
      <header className="product-section__heading">
        <span aria-hidden="true" />
        <div>
          <h2>Produtos relacionados</h2>
          {!showTabs && <a href="#produtos">Ver todos</a>}
        </div>
        <span aria-hidden="true" />
      </header>

      {showTabs && (
        <div className="product-tabs" role="tablist" aria-label="Categorias da vitrine">
          {productCategories.map((category, index) => (
            <button
              key={category}
              type="button"
              className={index === 0 ? 'is-active' : ''}
              role="tab"
              aria-selected={index === 0}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      <div className="product-carousel">
        <button className="product-carousel__arrow product-carousel__arrow--previous" type="button" onClick={() => scrollProducts(-1)} aria-label="Produtos anteriores">
          <img src={assets.chevron} alt="" aria-hidden="true" />
        </button>

        <div className="product-carousel__track" ref={productListRef}>
          {loading && Array.from({ length: 4 }).map((_, index) => <div className="product-card product-card--skeleton" key={index} />)}

          {!loading && error && (
            <div className="product-shelf__status" role="status">
              Não foi possível carregar a vitrine agora. Tente novamente em instantes.
            </div>
          )}

          {!loading && !error && products.slice(0, 8).map((product, index) => {
            const oldPrice = product.price * 1.07;
            const isInitiallyVisible = showTabs && index < 4;

            return (
              <article className="product-card" key={product.id}>
                <button className="product-card__click" type="button" onClick={() => onProductClick(product)} aria-label={`Ver ${product.productName}`}>
                  <span className="product-card__photo">
                    <img
                      src={product.photo}
                      alt={product.productName}
                      loading={isInitiallyVisible ? 'eager' : 'lazy'}
                      fetchPriority={isInitiallyVisible ? 'high' : 'auto'}
                      decoding="async"
                    />
                  </span>
                  <span className="product-card__description">{product.descriptionShort}</span>
                </button>
                <span className="product-card__old-price">{formatCurrency(oldPrice)}</span>
                <strong className="product-card__price">{formatCurrency(product.price)}</strong>
                <span className="product-card__installment">ou 2x de {formatCurrency(product.price / 2)} sem juros</span>
                <span className="product-card__shipping">Frete grátis</span>
                <button className="product-card__buy" type="button" onClick={() => onProductClick(product)}>Comprar</button>
              </article>
            );
          })}
        </div>

        <button className="product-carousel__arrow product-carousel__arrow--next" type="button" onClick={() => scrollProducts(1)} aria-label="Próximos produtos">
          <img src={assets.chevron} alt="" aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}
