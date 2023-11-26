//All products allowed for sale
const products = [
        { 
            id: 1,
            title: "Hamburguesa",
            description: "Rica hamburguesa con carne de res y vegetales",
            img: "source/productos/1.jpg",
            cost: "250",
            amount: 0
        },
        {
            id: 2,
            title: 'Hot Dog',
            description: 'Sabroso hot dog hecho con pan, salchicha y mostaza',
            img: 'source/productos/2.jpg',
            cost: '100',
            amount: 0
        },
        {
            id: 3,
            title: 'Nuggets',
            description: 'Ricos y calientes nuggets con diferentes salsas',
            img: 'source/productos/3.jpg',
            cost: '200',
            amount: 0
        },
        {
            id: 4,
            title: 'Pizza de peperoni',
            description: 'Pizza caliente con trozos de peperoni',
            img: 'source/productos/8.jpeg',
            cost: '300',
            amount: 0
        },
        {
            id: 5,
            title: 'Pizza de queso',
            description: 'Pizza con varios quesos agregados',
            img: 'source/productos/5.jpg',
            cost: '300',
            amount: 0
        },
        {
            id: 6,
            title: 'Pizza de jamon',
            description: 'Pizza con pedazos de jamon',
            img: 'source/productos/6.jpg',
            cost: '300',
            amount: 0
        },
        {
            id: 7,
            title: 'Pizza de maiz',
            description: 'Pizza rica con maiz añadido',
            img: 'source/productos/7.jpg',
            cost: '300',
            amount: 0
        },
        {
            id: 8,
            title: 'Coca Cola',
            description: 'Refresco Coca Cola',
            img: 'source/productos/4.jpg',
            cost: '50',
            amount: 0
        },
        {
            id: 9,
            title: 'Sprite',
            description: 'Refresco de Sprite',
            img: 'source/productos/9.jpeg',
            cost: '50',
            amount: 0
        },
        {
            id: 10,
            title: 'Jugo de Fresa',
            description: 'Espeso jugo de Fresa',
            img: 'source/productos/14.jpg',
            cost: '100',
            amount: 0
        },
        {
            id: 11,
            title: 'Jugo de mango',
            description: 'Suave jugo de Mango',
            img: 'source/productos/12.jpg',
            cost: '100',
            amount: 0
        },
        {
            id: 12,
            title: 'Jugo de Manzana',
            description: 'Rico jugo de Manzana',
            img: 'source/productos/13.jpg',
            cost: '100',
            amount: 0
        }
]
//EventListener click for the business icon and 
//send back to the home page when clicked
document.getElementById('logo').addEventListener('click',()=>{
    window.location.href = 'index.html';});
//Add EventListener to the cart icon and hide or show the cart
let cart_shopping = document.querySelector('#cart-shopping')
let cart = document.querySelector('.cart')
cart.setAttribute('hidden', 'true')
cart_shopping.addEventListener('click', () => {
    if(cart.classList.contains('hidden')) {
        cart.classList.remove('hidden')
    } else {
        cart.classList.add('hidden')
    }
})
//Function which clears the cart element
function clear_cart() {
    for(product of products){
        product.amount = 0
    }
    fill_cart();
}
//Provides EventListener to the 'Vaciar Carrito' button and clear the cart
document.querySelector('.clear-cart').addEventListener('click', clear_cart );
//This function is called when the website is loaded and shows all the products
//in the menu.
window.onload = () => {
    for(let product of products){
        let product_html = document.createElement('div')
        product_html.className = 'product'        
        product_html.innerHTML = `
            <img loading="lazy" src=${product.img} alt="">
            <h3>${product.title}</h3>
            <p>${product.description}</p>
            <h4>Costo: RD $${product.cost}</h4>
            <button onclick="btn(${product.id})">Agregar</button>
        `
        document.querySelector('#products').appendChild(product_html);
    }
}
//Function for the 'Agregar' button which adds one value to the product
//and fills the cart
function btn(id) {
    let found = false;
    products.forEach( product => {
        if (product.id === id){
            product.amount += 1;
            fill_cart();
            found = true;
        }
    })
    if (!found) {
        alert('no se encontro')
    }
}
//This function fills the cart with the products
function fill_cart() {
    document.getElementById('cart-elements').innerHTML = '';
    products.forEach( product => {
        if(product.amount > 0) {
            let product_html = document.createElement('div');
            product_html.className = 'cart-element';
            product_html.innerHTML = `
                <img src="${product.img}" alt="" style="width: 70px;">
                <p class="element-title" >${product.title}</p>
                <div class="cart-price">
                    <p class="element-amount"> <span class="-">-</span> ${product.amount} <span class="+">+</span> </p>
                    <p class="element-cost"> ${product.cost * product.amount} </p>
                </div>
            `
            document.querySelector('#cart-elements').appendChild(product_html)
        }
    })
}
