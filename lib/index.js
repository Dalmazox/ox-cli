"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var chalk_1 = __importDefault(require("chalk"));
var clear_1 = __importDefault(require("clear"));
var commander_1 = require("commander");
var figlet_1 = __importDefault(require("figlet"));
var tsyringe_1 = require("tsyringe");
var container_1 = __importDefault(require("./infra/container"));
var Index = /** @class */ (function () {
    function Index(_parseCommandHandler) {
        this._parseCommandHandler = _parseCommandHandler;
        clear_1.default();
        this.SayHello();
        this.ConfigureOptions();
    }
    Index.prototype.SayHello = function () {
        console.log(chalk_1.default.blue(figlet_1.default.textSync('ox-cli', { horizontalLayout: 'full' })), '\nType -h for helping command');
    };
    Index.prototype.ConfigureOptions = function () {
        commander_1.program
            .version('1.0.0')
            .description('Simple CLI for projects template')
            .option('--dotnet-api', 'dotnet api')
            .option('--dotnet-apii', 'dotnet api')
            .parse(process.argv);
    };
    Index.prototype.Startup = function () {
        this._parseCommandHandler.Handle();
    };
    Index = __decorate([
        tsyringe_1.injectable(),
        __param(0, tsyringe_1.inject('ParseCommand')),
        __metadata("design:paramtypes", [Object])
    ], Index);
    return Index;
}());
var index = container_1.default.resolve(Index);
index.Startup();
//# sourceMappingURL=index.js.map