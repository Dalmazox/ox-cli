import 'reflect-metadata';
import chalk from 'chalk';
import clear from 'clear';
import { program } from 'commander';
import figlet from 'figlet';
import { inject, injectable } from 'tsyringe';
import IHandler from './domain/core/commands/IHandler';
import container from './infra/container';

@injectable()
class Index {
  constructor(@inject('ParseCommand') private _parseCommandHandler: IHandler) {
    clear();
    this.SayHello();
    this.ConfigureOptions();
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
    this._parseCommandHandler.handle();
  }
}

const index = container.resolve(Index);
index.Startup();
