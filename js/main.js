//ES 6
class ProductList {
    #privateProp;

    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this.#privateProp = '123';

        this.fetchProducts();
        this.render();
    }

    get prop() {
        return this.#privateProp;
    }

    set prop(value) {
        this.#privateProp = value;
    }

    fetchProducts() {
        this.goods = [
            {id: 1, title: 'Notebook', price: 20000, img: './image/notebook.jpg'},
            {id: 2, title: 'Mouse', price: 1500, img: './image/mouse.jpg'},
            {id: 3, title: 'Keyboard', price: 5000, img: './image/keyboard.jpg'},
            {id: 4, title: 'Gamepad', price: 4500, img: './image/geympad.jpg'},
        ];
    }

    render() {
        const block = document.querySelector(this.container);

        for (let product of this.goods) {
            const productOdject = new ProductItem(product);

            this.allProducts.push(productOdject);
            block.insertAdjacentHTML('beforeend', productOdject.render());
        }
    }
}

class ProductItem {
    constructor(product) {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = product.img;
    }

    render() {
        return `<div class="product-item" data-id="${this.id}">
                    <img src="${this.img}" height="120px" alt="Some img">
                    <div class="desc">
                        <h3>${this.title}</h3>
                        <p>${this.price} \u20bd</p>
                        <button class="by-btn">Купить</button>
                    </div>
                </div>`;
    }
}

const list = new ProductList();

//1.Добавьте пустые классы для Корзины товаров и Элемента корзины товаров. 
//Продумайте, какие методы понадобятся для работы с этими сущностями.

class Bag {
    constructor() {

    }
    // метод для очистки корзины
    clearAll() {

    }
    //метод подсчета суммы купленных товаров
    total(){
        let totalPrice=0;
        this.goods.forEach(item => totalPrice += item.price);
      return totalPrice;
    }

    //метод оплаты товаров
    pay(){

    }
}

class BagItem {
    constructor() {

    }
    //удаляет один элемент из корзины
    deleteItem(){

    }
}


//ES5
/* const products = [
    {id: 1, title: 'Notebook', price: 20000, img: './image/notebook.jpg'},
    {id: 2, title: 'Mouse', price: 1500, img: './image/mouse.jpg'},
    {id: 3, title: 'Keyboard', price: 5000, img: './image/keyboard.jpg'},
    {id: 4, title: 'Gamepad', price: 4500, img: './image/geympad.jpg'},
];



const renderProduct = (title, price, img='') => {
    return `<div class="product-item">
                <h3>${title}</h3>
                <img src="${img}" height="120px" alt="">
                <p>${price}</p>
                <button class="by-btn">Добавить в корзину</button>
              </div>`;
};

const renderProducts = list => {
    const productList = list.map(item => renderProduct(item.title, item.price, item.img));
    console.log(productList);
    document.querySelector('.products').innerHTML = productList.join(' ');
};

renderProducts(products);
 */