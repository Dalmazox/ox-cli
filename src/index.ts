import 'reflect-metadata';
import chalk from 'chalk';
import clear from 'clear';
import { program } from 'commander';
import figlet from 'figlet';
import { inject, injectable } from 'tsyringe';
import IHandler from './domain/core/commands/IHandler';
import container from './infra/container';
import dotenv from 'dotenv';

@injectable()
class Index {
  constructor(@inject('ParseCommand') private _parseCommandHandler: IHandler) {
    clear();
    this.InjectEnv();
    this.SayHello();
    this.ConfigureOptions();
  }

  InjectEnv() {
    dotenv.config();
  }

  SayHello() {
    console.log(
      chalk.blue(figlet.textSync('ox-cli', { horizontalLayout: 'full' })),
      '\nType -h for helping command'
    );
  }

  ConfigureOptions() {
    program
      .version('1.0.0')
      .description('Simple CLI for projects template')
      .option('--dotnet-api', 'dotnet api')
      .option('--dotnet-apii', 'dotnet api')
      .parse(process.argv);
  }

  Startup() {
    this._parseCommandHandler.Handle();
  }
}

const index = container.resolve(Index);
index.Startup();
