import './Drink.css';
import { Layer } from '../Layer/Layer.js';


export const Drink = (props) => {
  const { id, name, ordered, image, layers } = props

  const element = document.createElement('div')
  element.classList.add('drink')

  element.innerHTML = `
    <div class="drink__product">
        <div class="drink__cup">
            <img src=${image}>
        </div>
        <div class="drink__info">
            <h3>${name}</h3>
            <div class="layer">
            </div>
        </div>
    </div>
    <div class="drink__controls">
    <button class="order-btn">
        Objednat
        </button>
    </div>
`

  element.querySelector('.layer').append(
    ...layers.map((layer) => Layer({ color: layer.color, label: layer.label }))
  );

  const orderButton = element.querySelector('.order-btn');
  if (ordered) {
    orderButton.classList.add('order-btn--ordered');
    orderButton.textContent = 'Zrušit';
  } else {
    orderButton.classList.remove('order-btn--ordered');
    orderButton.textContent = 'Objednat';
  };

  orderButton.addEventListener('click', () => {

    fetch(`https://cafelora.kodim.app/api/me/drinks/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        ordered: !ordered
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        element.replaceWith(
          Drink(data.result)
        )
      });
  });


  return element;

}