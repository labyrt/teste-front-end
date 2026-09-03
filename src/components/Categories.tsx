import { assets } from '../assets';

const shoppingCategories = [
  ['Tecnologia', assets.categories.tecnologia],
  ['Supermercado', assets.categories.supermercado],
  ['Bebidas', assets.categories.bebidas],
  ['Ferramentas', assets.categories.ferramentas],
  ['Saúde', assets.categories.saude],
  ['Esportes e Fitness', assets.categories.esportes],
  ['Moda', assets.categories.moda],
] as const;

export default function Categories() {
  return (
    <section className="categories layout-container" aria-label="Compre por categoria">
      <div className="categories__rail">
        {shoppingCategories.map(([label, asset], index) => (
          <a className={`category-card ${index === 0 ? 'is-active' : ''}`} href="#produtos" key={label}>
            <span className="category-card__icon"><img src={asset} alt="" aria-hidden="true" /></span>
            <span>{label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
