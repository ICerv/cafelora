import './style.css';

import { HomePage } from './pages/HomePage/HomePage.js';
import { OrderPage } from "./pages/OrderPage/OrderPage.js";

const { pathname } = window.location;

//if (pathname === BASE_PATH + "/") 
if (pathname === '/') {
  document.querySelector('#app').append(HomePage());
  // else if (pathname === BASE_PATH + "/objednavka")
} else if (pathname === "/objednavka") {
  document.querySelector('#app').append(OrderPage());
};