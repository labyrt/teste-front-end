const categories = [
  ['Tecnologia', 'cat-tecnologia.png'],
  ['Supermercado', 'cat-supermercado.png'],
  ['Bebidas', 'cat-bebidas.png'],
  ['Ferramentas', 'cat-ferramentas.png'],
  ['Saúde', 'cat-saude.png'],
  ['Esportes e Fitness', 'cat-esportes.png'],
  ['Moda', 'cat-moda.png'],
] as const;

export default function Categories() {
  return (
    <section className="categories shell" aria-label="Compre por categoria">
      <div className="categories__rail">
        {categories.map(([label, asset], index) => (
          <a className={`category-card ${index === 0 ? 'is-active' : ''}`} href="#produtos" key={label}>
            <span className="category-card__icon"><img src={`/assets/${asset}`} alt="" aria-hidden="true" /></span>
            <span>{label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
