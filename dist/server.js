"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var apollo_server_express_1 = require("apollo-server-express");
var http_1 = require("http");
var compression_1 = __importDefault(require("compression"));
var cors_1 = __importDefault(require("cors"));
var helmet_1 = __importDefault(require("helmet"));
var schema_1 = require("./schema");
var PORT = process.env.PORT || 3000;
var app = express_1.default();
app.use(helmet_1.default({ contentSecurityPolicy: (process.env.NODE_ENV === 'production') ? undefined : false }));
app.use(cors_1.default());
app.use(compression_1.default());
var server = new apollo_server_express_1.ApolloServer({
    schema: schema_1.schema,
});
server.applyMiddleware({ app: app, path: "/graphql" });
var httpServer = http_1.createServer(app);
httpServer.listen({ port: PORT }, function () {
    console.log("GraphQL-Server is running on port: " + PORT);
});
