"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceTypeDefs = void 0;
var apollo_server_express_1 = require("apollo-server-express");
exports.ServiceTypeDefs = apollo_server_express_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    type User {\n        name: String\n    }\n\n    type Query {\n        getUsers: [User]\n    }\n"], ["\n    type User {\n        name: String\n    }\n\n    type Query {\n        getUsers: [User]\n    }\n"])));
var templateObject_1;
