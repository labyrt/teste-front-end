const groups = [
  ['Institucional', 'Sobre Nós', 'Movimento', 'Trabalhe conosco'],
  ['Ajuda', 'Suporte', 'Fale Conosco', 'Perguntas Frequentes'],
  ['Termos', 'Termos e Condições', 'Política de Privacidade', 'Troca e Devolução'],
] as const;

export default function NewsletterFooter() {
  return (
    <>
      <section className="newsletter" id="newsletter">
        <div className="newsletter__inner shell">
          <div className="newsletter__copy">
            <h2>Inscreva-se na nossa newsletter</h2>
            <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
          </div>
          <form className="newsletter__form" onSubmit={(event) => event.preventDefault()}>
            <div className="newsletter__fields">
              <label><span className="sr-only">Nome</span><input type="text" placeholder="Digite seu nome" /></label>
              <label><span className="sr-only">E-mail</span><input type="email" placeholder="Digite seu e-mail" /></label>
              <button type="submit" className="button button--yellow">Inscrever</button>
            </div>
            <label className="terms-check"><input type="checkbox" /> <span>Aceito os termos e condições</span></label>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="footer__main shell">
          <div className="footer__about">
            <img src="/assets/logo.png" alt="Econverse" className="footer__logo" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="socials" aria-label="Redes sociais">
              <a href="#top" aria-label="Instagram"><img src="/assets/instagram.svg" alt="" /></a>
              <a href="#top" aria-label="Facebook"><img src="/assets/facebook.svg" alt="" /></a>
              <a href="#top" aria-label="LinkedIn"><img src="/assets/linkedin.svg" alt="" /></a>
            </div>
          </div>
          <div className="footer__divider" aria-hidden="true" />
          <nav className="footer__links" aria-label="Links do rodapé">
            {groups.map(([title, ...items]) => (
              <div key={title}>
                <h3>{title}</h3>
                {items.map((item) => <a href="#top" key={item}>{item}</a>)}
              </div>
            ))}
          </nav>
        </div>
        <div className="footer__bottom">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
      </footer>
    </>
  );
}
