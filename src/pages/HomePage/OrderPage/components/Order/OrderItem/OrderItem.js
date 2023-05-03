import "./OrderItem.css";

export const OrderItem = (props) => {
  const { name, image } = props;
  const element = document.createElement("div");

  element.classList.add("order-item");

  element.innerHTML = `
    <img src=${image} class="order-item__image">
    <div class="order-item__name">
      ${name}
    </div>
  `;

  return element;
};