import { ApolloError } from "apollo-server-express";
import { customersService, shopsService, productsService, shoppingCartService, Product as ProductInterface, ShoppingCart as ShoppingCartInterface } from "../data-store/datalake";

interface argsInterface {
    id: string;
}

const ServiceResolvers = {
    Query: {
        getCustomer: async (_:any, {id}:argsInterface) => {
            try {
                return customersService.get(id)
            } catch (error) {
                throw new ApolloError(error);
            }
        },
        getCustomers: async (_:any, args: any) => {
            try {
                return customersService.list();
            } catch (error) {
                throw new ApolloError(error);
            }
        },
        getShops: async (_:any, args: any) => {
            try {
                return shopsService.list();
            } catch (error) {
                throw new ApolloError(error);
            } 
        },
        getProducts: async (_:any, args: any) => {
            try {
                return productsService.list();
            } catch (error) {
                throw new ApolloError(error);
            }
        },
        getProduct: async (_:any, {id}: argsInterface ) => {
            try {
                return productsService.get(id);
            } catch (error) {
                throw new ApolloError(error);
            }
        }
    },
    Product: {
        shop: (product:ProductInterface) => shopsService.get(product.shopId)
    },
    Mutation: {
        createShoppingCart: async (parent: any, args:Partial<ShoppingCartInterface>) => {
            const { userId } = args;
            try {
                const id = shoppingCartService.create({
                    userId,
                    items: []
                });

                return shoppingCartService.get(id);
            } catch (error) {
                throw new ApolloError(error);
            }
        },
        addItemToCart: async (parent: any, args: any) => {
            return null;
        }
    }
};



export default ServiceResolvers;
