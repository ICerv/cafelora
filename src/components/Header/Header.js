export const Header = ({ showMenu }) => {
  console.log(showMenu);

  const element = document.createElement("header");

  let menu = `
    <a href="/">domů</a>
    <a href="#menu">menu</a>
    <a href="#gallery">galerie</a>
    <a href="#contact">kontakt</a>
  `;

  if (!showMenu) {
    menu = `
  <a href="/">Hlavní stránka</a>
`;
  }

  element.innerHTML = `  <div class="header__content container">
  <div class="site-logo"></div><div class="navigation">
  <button class="nav-btn"></button>
  <nav class="inline-nav rollout-nav nav-closed">
  ${menu}</nav></div>`;

  element.querySelector(".nav-btn").addEventListener("click", () => {
    element.querySelector(".rollout-nav").classList.toggle("nav-closed");
  });

  element.querySelector(".rollout-nav").addEventListener("click", () => {
    element.querySelector("nav").classList.toggle("nav-closed");
  });

  return element;
};