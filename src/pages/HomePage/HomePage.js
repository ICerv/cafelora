import { Header } from '../../components/Header/Header.js';
import { Banner } from './components/Banner/Banner.js';
import { Menu } from './components/Menu/Menu.js';
import { Gallery } from './components/Gallery/Gallery.js';
import { Contact } from './components/Contact/Contact.js';
import { Footer } from '../../components/Footer/Footer.js';


export const HomePage = () => {
  const pageElement = document.createElement('div');
  pageElement.classList.add('page');

  const main = document.createElement('main');
  main.append(Banner(), Menu({ drinks: 'loading' }), Gallery(), Contact());

  pageElement.append(Header({ showMenu: true }), main, Footer());

  return pageElement;
}