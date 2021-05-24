import { gql } from "apollo-server-express";

export const ServiceTypeDefs = gql`
    type Customer {
        id: ID
        name: String
        email: String
    }

    type Shop {
        id: ID
        name: String
        description: String
    }

    type Product {
        id: ID
        name: String
        price: Int
        shop: Shop
    } 

    type ShoppingItem {
        quantity: Int
        itemId: String
    }

    type ShoppingCart {
        id: ID
        userId: String
        items: [ShoppingItem]
    }

    type Query {
        getCustomer(id: ID!): Customer
        getCustomers: [Customer]
        getShops: [Shop]
        getProducts: [Product]
        getProduct(id: ID!): Product        
    }

    type Mutation {
        createShoppingCart(userId: String!): ShoppingCart
        addItemToCart(itemId: String!, shoppingCartId: String!, userId: String! ): ShoppingCart
    }
`;
