import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import ProductModal from './ProductModal';

const product = {
  id: '2',
  productName: 'Iphone 11 PRO MAX BRANCO 2',
  descriptionShort: 'Iphone 11 PRO MAX BRANCO 2',
  photo: 'https://example.com/iphone.png',
  price: 14990,
};

describe('ProductModal', () => {
  it('renders the selected product data from the catalog', () => {
    render(<ProductModal product={product} onClose={vi.fn()} />);

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: product.productName })).toBeInTheDocument();
    expect(screen.getByText(/14\.990,00/)).toBeInTheDocument();
    expect(screen.getByText(product.descriptionShort)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: product.productName })).toHaveAttribute('src', product.photo);
  });

  it('increments quantity and never decrements below one', async () => {
    const user = userEvent.setup();
    render(<ProductModal product={product} onClose={vi.fn()} />);

    expect(screen.getByText('01')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Aumentar quantidade' }));
    expect(screen.getByText('02')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Diminuir quantidade' }));
    await user.click(screen.getByRole('button', { name: 'Diminuir quantidade' }));
    expect(screen.getByText('01')).toBeInTheDocument();
  });

  it('closes with Escape and with the close button', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(<ProductModal product={product} onClose={onClose} />);

    fireEvent.keyDown(window, { key: 'Escape' });
    expect(onClose).toHaveBeenCalledTimes(1);

    await user.click(screen.getByRole('button', { name: 'Fechar' }));
    expect(onClose).toHaveBeenCalledTimes(2);
  });
});
