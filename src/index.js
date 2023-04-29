import './style.css';

import { HomePage } from './pages/HomePage/HomePage.js';

const { pathname } = window.location;

if (pathname === '/') {
  document.querySelector('#app').append(HomePage());
}