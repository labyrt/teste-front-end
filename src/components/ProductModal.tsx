import { useEffect, useState } from 'react';
import type { Product } from '../types/product';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

function currency(value: number) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (!product) return;
    setQuantity(1);
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose();
    }

    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => {
      if (event.target === event.currentTarget) onClose();
    }}>
      <section className="product-modal" role="dialog" aria-modal="true" aria-labelledby="modal-product-title">
        <button className="product-modal__close" type="button" onClick={onClose} aria-label="Fechar">
          <img src="/assets/close.svg" alt="" />
        </button>

        <div className="product-modal__media">
          <img src={product.photo} alt={product.productName} />
        </div>

        <div className="product-modal__content">
          <div>
            <h2 id="modal-product-title">{product.productName}</h2>
            <strong>{currency(product.price)}</strong>
          </div>
          <div className="product-modal__description">
            <p>{product.descriptionShort}</p>
            <a href="#produtos">Veja mais detalhes do produto &gt;</a>
          </div>
          <div className="product-modal__actions">
            <div className="quantity" aria-label="Quantidade">
              <button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} aria-label="Diminuir quantidade">−</button>
              <span>{String(quantity).padStart(2, '0')}</span>
              <button type="button" onClick={() => setQuantity((value) => value + 1)} aria-label="Aumentar quantidade">+</button>
            </div>
            <button className="button button--yellow product-modal__buy" type="button">Comprar</button>
          </div>
        </div>
      </section>
    </div>
  );
}
