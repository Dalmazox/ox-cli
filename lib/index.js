#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var clear_1 = __importDefault(require("clear"));
var figlet_1 = __importDefault(require("figlet"));
var commander_1 = require("commander");
clear_1.default();
console.log(chalk_1.default.blue(figlet_1.default.textSync('ox-cli', { horizontalLayout: 'full' })), '\nType -h for helping command');
commander_1.program
    .version('1.0.0')
    .description('Simple CLI for projects template')
    .parse(process.argv);
