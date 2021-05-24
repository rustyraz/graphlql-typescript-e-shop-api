import { DataStore } from 'notarealdb';

const store = new DataStore("./data");


interface Shop {
     id: string;
     name: string;
     description: string

}

interface Customer {
    id: string;
    name: string;
    email: string;
}

interface Product {
    id: string;
    name: string;
    price: number;
    shopId: string
}

interface CartItem {
    quantity: string;
    productId: string
}

interface ShoppingCart {
    id: string;
    userId: string;
    items: CartItem[]
}

const shopsService = store.collection<Shop>('online-shops');
const customersService = store.collection<Customer>('customers');
const productsService = store.collection<Product>('products');
const shoppingCartService = store.collection<ShoppingCart>('shopping-carts');
export {
    shopsService,
    customersService,
    productsService,
    shoppingCartService,
    Product,
    Customer,
    Shop,
    ShoppingCart
}