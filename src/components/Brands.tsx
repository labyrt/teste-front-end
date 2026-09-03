import { assets } from '../assets';

export default function Brands() {
  return (
    <section className="brand-navigation layout-container" aria-labelledby="brands-title">
      <h2 id="brands-title">Navegue por marcas</h2>
      <div className="brand-navigation__list">
        {Array.from({ length: 5 }).map((_, index) => (
          <a href="#produtos" className="brand-navigation__item" aria-label={`Marca ${index + 1}`} key={index}>
            <img src={assets.logo} alt="Econverse" />
          </a>
        ))}
      </div>
    </section>
  );
}
