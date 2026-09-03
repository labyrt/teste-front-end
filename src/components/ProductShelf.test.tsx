import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import ProductShelf from './ProductShelf';

const products = [
  {
    id: '1',
    productName: 'Iphone 11 PRO MAX BRANCO 1',
    descriptionShort: 'Iphone 11 PRO MAX BRANCO 1',
    photo: 'https://example.com/iphone.png',
    price: 15000,
  },
];

describe('ProductShelf', () => {
  it('renders catalog information and the required tabs', () => {
    render(
      <ProductShelf
        products={products}
        showTabs
        onProductClick={vi.fn()}
      />,
    );

    expect(screen.getByRole('heading', { name: 'Produtos relacionados' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /celular/i })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByText(products[0].descriptionShort)).toBeInTheDocument();
    expect(screen.getByText(/15\.000,00/)).toBeInTheDocument();
    expect(screen.getByText('Frete grátis')).toBeInTheDocument();
  });

  it('returns the exact clicked product to the parent', async () => {
    const user = userEvent.setup();
    const onProductClick = vi.fn();
    render(<ProductShelf products={products} onProductClick={onProductClick} />);

    await user.click(screen.getByRole('button', { name: `Ver ${products[0].productName}` }));
    expect(onProductClick).toHaveBeenCalledWith(products[0]);

    await user.click(screen.getByRole('button', { name: 'Comprar' }));
    expect(onProductClick).toHaveBeenLastCalledWith(products[0]);
  });

  it('shows an accessible error state when the catalog cannot load', () => {
    render(
      <ProductShelf
        products={[]}
        error="HTTP 500"
        onProductClick={vi.fn()}
      />,
    );

    expect(screen.getByRole('status')).toHaveTextContent(
      'Não foi possível carregar a vitrine agora',
    );
  });
});
