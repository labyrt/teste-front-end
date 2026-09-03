import { fireEvent, render, screen, within } from '@testing-library/react';
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

    const dialog = screen.getByRole('dialog');
    expect(dialog).toBeInTheDocument();
    expect(within(dialog).getByRole('heading', { name: product.productName })).toBeInTheDocument();
    expect(within(dialog).getByText(/14\.990,00/)).toBeInTheDocument();

    const description = dialog.querySelector('.product-modal__description');
    expect(description).not.toBeNull();
    expect(within(description as HTMLElement).getByText(product.descriptionShort)).toBeInTheDocument();

    expect(within(dialog).getByRole('img', { name: product.productName })).toHaveAttribute('src', product.photo);
  });

  it('increments quantity and never decrements below one', async () => {
    const user = userEvent.setup();
    render(<ProductModal product={product} onClose={vi.fn()} />);

    const quantity = screen.getByLabelText('Quantidade');
    expect(within(quantity).getByText('01')).toBeInTheDocument();

    await user.click(within(quantity).getByRole('button', { name: 'Aumentar quantidade' }));
    expect(within(quantity).getByText('02')).toBeInTheDocument();

    await user.click(within(quantity).getByRole('button', { name: 'Diminuir quantidade' }));
    await user.click(within(quantity).getByRole('button', { name: 'Diminuir quantidade' }));
    expect(within(quantity).getByText('01')).toBeInTheDocument();
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
