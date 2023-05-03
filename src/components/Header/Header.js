import './Header.css';

export const Header = (props = {}) => {
  const { showMenu = true } = props;

  const element = document.createElement('header');

  element.innerHTML = `
    <div class="header__content container">
      <div class="site-logo"></div>
      ${showMenu ? `
        <div class="navigation">
          <button class="nav-btn"></button>
          <nav class="rollout-nav nav-closed">
            <a href="#home">domů</a>
            <a href="#menu">menu</a>
            <a href="#gallery">galerie</a>
            <a href="#contact">kontakt</a>
          </nav>
        </div>
      ` : `
        <nav class="inline-nav">
          <a href="/">Hlavní stránka</a>
        </nav>
      `}
    </div>
  `;

  const navBtn = element.querySelector('.nav-btn');
  if (navBtn !== null) {
    navBtn.addEventListener('click', () => {
      element.querySelector('nav').classList.toggle('nav-closed');
    });
  }

  return element;
}