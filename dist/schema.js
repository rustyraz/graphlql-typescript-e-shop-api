"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
var graphql_tools_1 = require("graphql-tools");
var serviceSchema_1 = require("./service/serviceSchema");
var serviceResolver_1 = __importDefault(require("./service/serviceResolver"));
exports.schema = graphql_tools_1.makeExecutableSchema({
    typeDefs: serviceSchema_1.ServiceTypeDefs,
    resolvers: serviceResolver_1.default
});
