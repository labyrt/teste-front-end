import { renderHook, waitFor } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { useProducts } from './useProducts';

afterEach(() => {
  vi.unstubAllGlobals();
});

describe('useProducts', () => {
  it('loads and normalizes products from the Econverse payload shape', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => ({
        success: true,
        products: [
          {
            productName: 'IPHONE 13 MINI 2',
            descriptionShort: 'IPHONE 13 MINI 2',
            photo: 'https://example.com/iphone.png',
            price: 12000,
          },
        ],
      }),
    });

    vi.stubGlobal('fetch', fetchMock);
    const { result } = renderHook(() => useProducts());

    expect(result.current.loading).toBe(true);

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(fetchMock).toHaveBeenCalledWith(
      '/api/produtos.json',
      expect.objectContaining({ headers: { Accept: 'application/json' } }),
    );
    expect(result.current.error).toBeNull();
    expect(result.current.products).toEqual([
      {
        id: '0',
        productName: 'IPHONE 13 MINI 2',
        descriptionShort: 'IPHONE 13 MINI 2',
        photo: 'https://example.com/iphone.png',
        price: 12000,
      },
    ]);
  });

  it('exposes a useful error when the endpoint fails', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: false,
        status: 500,
      }),
    );

    const { result } = renderHook(() => useProducts());
    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.products).toEqual([]);
    expect(result.current.error).toBe('HTTP 500');
  });
});
