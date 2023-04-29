import './style.css';

import { HomePage } from './pages/HomePage/HomePage.js';
import { OrderPage } from "./pages/HomePage/OrderPage/OrderPage.js";

const { pathname } = window.location;

if (pathname === '/') {
  document.querySelector('#app').append(HomePage());
} else if (pathname === "/objednavka") {
  document.querySelector('#app').append(OrderPage());
};