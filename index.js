class TicketManager {
    constructor() {
        this.events = [];
    }

    addProduct = (title, description, price, thumbnail, code, stock) => {
        // Comprobar si el código ya está en uso
        if (this.events.some(product => product.code === code)) {
            return console.log(`El código ${code} ya está en uso`);
        }

        // Agregar el nuevo producto al array events
        const product = { title, description, price, thumbnail, code, stock };
        this.events.push(product);

        // Comprobar si falta algún dato
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            return console.log("Faltan datos");
        }
    };

    getProducts = () => {
        return this.events;
    };

    getProductById = (id) => {
        const product = this.events.find(product => product.code === id);
        if (!product) {
            console.log("Producto no encontrado");
        }
        return product;
    };
}

const manager = new TicketManager();
manager.addProduct("Manga One piece tomo n°1", "Manga de 34paginas..", 1200, "../img/onepiece01.jpg", 1234, 5);
manager.addProduct("Manga Naruto tomo n°1", "Manga de 42 páginas..", 1000, "../img/naruto01.jpg", 5678, 3);

// Obtener todos los productos
const products = manager.getProducts();
console.log(products);

// Obtener un producto por su código
const product = manager.getProductById(1234);
console.log(product);

// Obtener un producto que no existe
const productNotFound = manager.getProductById(9999);
console.log(productNotFound);

const fs = require('fs');

const fillname = './ejemplo.txt'
const obj = manager



fs.writeFileSync(fillname, JSON.stringify(obj, null, '\t'))
const contenido = JSON.parse(fs.readFileSync(fillname, 'utf-8'))
 contenido.precio= 2000
fs.writeFileSync(fillname, JSON.stringify(contenido,null, '\t'))