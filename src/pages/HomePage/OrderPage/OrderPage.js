import "./OrderPage.css";

import { Header } from "../../../components/Header/Header.js";
import { Footer } from "../../../components/Footer/Footer.js";
import { Order } from "./components/Order/Order.js";

export const OrderPage = () => {
  const element = document.createElement('div');
  element.classList.add('page');
  element.append(
    Header({ showMenu: false }),
    Order({ items: 'loading' }),
    Footer(),
  );

  return element;
}