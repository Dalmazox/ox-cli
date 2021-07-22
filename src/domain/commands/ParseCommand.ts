import { program } from 'commander';
import { inject, injectable } from 'tsyringe';
import IHandler from '../core/commands/IHandler';
import CommandType from '../core/enums/CommandType';
import ICommandFactory from '../core/factories/ICommandFactory';
import Options from '../core/types/Options';

@injectable()
class ParseCommand implements IHandler {
  constructor(
    @inject('CommandFactory') private _commandFactory: ICommandFactory
  ) {}

  Handle(): void {
    const options = program.opts() as Options;
    const command = this.Transpile(options);

    this._commandFactory.Build(command).Handle();
  }

  private Transpile(options: Options): CommandType {
    const keys = Object.keys(options);
    const mappedKeys = keys.map((key) => <CommandType>key);
    return mappedKeys[0];
  }
}

export default ParseCommand;
