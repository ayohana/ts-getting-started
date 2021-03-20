"use strict";
// To see output in the console, etner the following CLI commands:
// tsc
// node main.js
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
// config reads your .env file, parses the contents, assigns it to process.env, 
// and returns an object with a parsed key containing the loaded content 
// or an error key if it failed.
var result = dotenv_1.default.config();
if (result.error) {
    throw result.error;
}
console.log(result.parsed); // Returns { DB_HOST: 'localhost', WEB_HOST: 'staging.adventure-works.com' }
console.log(process.env.DB_HOST);
console.log(process.env.WEB_HOST);
