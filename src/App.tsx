import { useCallback, useState } from 'react';
import Brands from './components/Brands';
import Categories from './components/Categories';
import Header from './components/Header';
import Hero from './components/Hero';
import NewsletterFooter from './components/NewsletterFooter';
import PartnerBanners from './components/PartnerBanners';
import ProductModal from './components/ProductModal';
import ProductShelf from './components/ProductShelf';
import { useProducts } from './hooks/useProducts';
import type { Product } from './types/product';

export default function App() {
  const { products, loading, error } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const closeModal = useCallback(() => setSelectedProduct(null), []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Categories />
        <ProductShelf products={products} loading={loading} error={error} showTabs onProductClick={setSelectedProduct} />
        <PartnerBanners />
        <ProductShelf products={products} loading={loading} error={error} onProductClick={setSelectedProduct} />
        <PartnerBanners />
        <Brands />
        <ProductShelf products={products} loading={loading} error={error} onProductClick={setSelectedProduct} />
      </main>
      <NewsletterFooter />
      <ProductModal product={selectedProduct} onClose={closeModal} />
    </>
  );
}
