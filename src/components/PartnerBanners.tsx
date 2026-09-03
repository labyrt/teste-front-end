import { assets } from '../assets';

export default function PartnerBanners() {
  return (
    <section className="partner-banners layout-container" aria-label="Parceiros">
      {[0, 1].map((item) => (
        <article className="partner-card" key={item}>
          <img src={assets.partner} alt="Ambiente de parceiro Econverse" />
          <div className="partner-card__overlay" />
          <div className="partner-card__content">
            <h2>Parceiros</h2>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
            <button type="button" className="button button--yellow">CONFIRA</button>
          </div>
        </article>
      ))}
    </section>
  );
}
