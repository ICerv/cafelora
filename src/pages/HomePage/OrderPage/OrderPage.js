import "./OrderPage.css";

import { Header } from "../../../components/Header/Header.js";
import { Footer } from "../../../components/Footer/Footer.js";

export const OrderPage = () => {
  const element = document.createElement("div");

  element.classList.add("page");

  element.append(Header({ showMenu: false }), Footer());

  element.innerHTML = `
  <main class="order">
      <div class="order__content container">
      <h1>Vaše objedávnka</h1>
      <p class="empty-order empty-order--hide">Zatím nemáte nic objednáno</p>
      <div class="order__items">
          <div class="order-item">
          <img src="https://cafelora.kodim.app/assets/cups/vienna-coffee.png" class="order-item__image">
          <div class="order-item__name">
              Vídeňská káva
          </div>
          </div>

          <div class="order-item">
          <img src="https://cafelora.kodim.app/assets/cups/chocolate-milk.png" class="order-item__image">
          <div class="order-item__name">
              Čokoláda s mlékem
          </div>
          </div>
      </div>
      </div>
  </main>
  `
  return element;
};