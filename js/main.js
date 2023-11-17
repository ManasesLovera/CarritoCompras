const products = [
        { 
        title: "Hamburguesa con papas fritas y una soda",
        description: "Rica hamburguesa con carne de res y vegetales servida con una soda y una papas fritas",
        img: "source/productos/1.jpg",
        cost: "RD $250"
        },
        {
            title: 'Hot Dog',
            description: 'Sabroso hot dog hecho con pan, salchicha y mostaza',
            img: 'source/productos/2.jpg',
            cost: 'RD $100'
        },
        {
            title: 'Nuggets',
            description: 'Ricos y calientes nuggets con diferentes salsas',
            img: 'source/productos/3.jpg',
            cost: 'RD $200'
        },
        {
            title: 'Pizza de peperoni',
            description: 'Pizza caliente con trozos de peperoni',
            img: 'source/productos/8.jpeg',
            cost: '300'
        },
        {
            title: 'Pizza de queso',
            description: 'Pizza con varios quesos agregados',
            img: 'source/productos/8.jpeg',
            cost: '300'
        },
        {
            title: 'Pizza de jamon',
            description: 'Pizza con pedazos de jamon',
            img: 'source/productos/8.jpeg',
            cost: '300'
        },
        {
            title: 'Pizza de maiz',
            description: 'Pizza rica con maiz añadido',
            img: 'source/productos/8.jpeg',
            cost: '300'
        },
        {
            title: 'Coca Cola',
            description: 'Refresco Coca Cola',
            img: 'source/productos/4.jpg',
            cost: '50'
        },
        {
            title: 'Sprite',
            description: 'Refresco de Sprite',
            img: 'source/productos/9.jpeg',
            cost: '50'
        },
        {
            title: 'Jugo de Fresa',
            description: 'Espeso jugo de Fresa',
            img: 'source/productos/14.jpg',
            cost: '100'
        },
        {
            title: 'Jugo de mango',
            description: 'Suave jugo de Mango',
            img: 'source/productos/12.jpg',
            cost: '100'
        },
        {
            title: 'Jugo de Manzana',
            description: 'Rico jugo de Manzana',
            img: 'source/productos/13.jpg',
            cost: '100'
        }
]
let logo = document.getElementById('logo');

logo.addEventListener('click', goHome);

function goHome() {
    window.location.href = 'index.html';
}
let cart_shopping = document.querySelector('#cart-shopping')
let cart = document.querySelector('.cart')
cart_shopping.addEventListener('click', () => {
    if(cart.hasAttribute('hidden')){
        cart.removeAttribute('hidden')
    } else {
        cart.setAttribute('hidden', true)
    }
})

window.onload = () => {
    for(let product of products){
        //console.log(product)
        let product_html = document.createElement('div')
        product_html.className = 'product'        
        product_html.innerHTML = `
            <img src=${product.img} alt="">
            <h3>${product.title}</h3>
            <p style="font-size:14px;">${product.description}</p>
            <h4>Costo: RD $${product.cost}</h4>
            <button>Agregar</button>
        `
        document.querySelector('#products').appendChild(product_html);
    }
};