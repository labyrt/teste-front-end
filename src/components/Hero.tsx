import { assets } from '../assets';

export default function Hero() {
  return (
    <section className="hero" id="top" aria-label="Promoção principal">
      <img className="hero__image" src={assets.hero} alt="Promoções Black Friday" />
      <div className="hero__scrim" />
      <div className="hero__content layout-container">
        <h1>Venha conhecer nossas promoções</h1>
        <p><strong>50% Off</strong> nos produtos</p>
        <a className="button button--yellow" href="#produtos">Ver produto</a>
      </div>
    </section>
  );
}
