import './Menu.css';
import { Drink } from './components/Drink/Drink.js';

export const Menu = (props) => {
    const { drinks } = props;
    const element = document.createElement('section')
    element.classList.add('menu')

    element.innerHTML = `
        <div class="container" id="menu">
            <h2>Naše nabídka</h2>
            <p class="menu-intro">
                Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
            </p>
            <div class="drinks-list"></div>

            <div class="order-detail">
                <a href="/objednavka">Detail objednávky</a>
            </div>
        </div>
    `


    if (drinks === 'loading') {

        fetch(`https://cafelora.kodim.app/api/me/drinks`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        }).then((response) => response.json())
            .then((data) => {
                console.log(data)
                element.replaceWith(
                    Menu({
                        drinks: data.result,
                    })
                );
            });

    } else {

        element.querySelector(".drinks-list").append(...drinks.map((drink) =>
            Drink(drink)
        )
        );
    }
    return element;
}

// const layers = [
//     {
//         color: '#feeeca',
//         label: 'mléčná pěna',
//     },
//     {
//         color: '#fed7b0',
//         label: 'teplé mléko',
//     },
//     {
//         color: '#613916',
//         label: 'espresso',
//     },
// ];


//Komponenta Czechitas prijima dve props "inna" a "nataliia", ktere se pouzivaji k zobrazeni jmen vyvojaru, kteri vytvorily aplikaci FastFingers
export const Czechitas = (props) => {
    const { inna, nataliia } = props;
    const capitalizedInna = inna.charAt(0).toUpperCase() + inna.slice(1);
    const capitalizedNataliia = nataliia.charAt(0).toUpperCase() + nataliia.slice(1);

    return `
    <h1> 🙌FastFingers🙌 </h1>
    <p> Made by: { ${capitalizedInna} } & { ${capitalizedNataliia} } </p
    `
}
console.log(Czechitas())