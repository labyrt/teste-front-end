import { useEffect, useMemo, useState } from 'react';
import type { Product, ProductsPayload } from '../types/product';

const PRODUCTS_URL =
  'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json';

function normalizeProducts(payload: ProductsPayload): Product[] {
  const list = Array.isArray(payload)
    ? payload
    : payload.products ?? payload.data ?? payload.items ?? [];

  return list
    .filter((item): item is Product => Boolean(item?.photo && item?.price))
    .map((item, index) => ({
      id: String(item.id ?? index),
      productName: item.productName ?? item.descriptionShort ?? 'Produto',
      descriptionShort: item.descriptionShort ?? item.productName ?? 'Produto',
      photo: item.photo,
      price: Number(item.price),
    }));
}

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      try {
        setLoading(true);
        const response = await fetch(PRODUCTS_URL, { signal: controller.signal });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const payload = (await response.json()) as ProductsPayload;
        setProducts(normalizeProducts(payload));
      } catch (err) {
        if (controller.signal.aborted) return;
        setError(err instanceof Error ? err.message : 'Erro ao carregar produtos');
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    load();
    return () => controller.abort();
  }, []);

  return useMemo(() => ({ products, loading, error }), [products, loading, error]);
}
