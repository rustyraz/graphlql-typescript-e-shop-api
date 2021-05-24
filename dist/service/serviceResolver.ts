import { ApolloError } from "apollo-server-express";

const ServiceResolvers = {
    Query: {
        getUsers: async (_:any, args: any) => {
            try {
                const mockUsers = [
                    { name: "Peter" },
                    { name: "James" }
                ];
                return mockUsers;
            } catch (error) {
                throw new ApolloError(error);
            }
        }
    }
};

export default ServiceResolvers;
