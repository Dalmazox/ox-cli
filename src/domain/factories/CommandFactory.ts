import DotnetApiCommand from '../commands/DotnetApiCommand';
import IHandler from '../core/commands/IHandler';
import CommandType from '../core/enums/CommandType';
import ICommandFactory from '../core/factories/ICommandFactory';

class CommandFactory implements ICommandFactory {
  Build(command: CommandType): IHandler {
    switch (command) {
      case CommandType.DOTNET_API:
        return new DotnetApiCommand();
    }
  }
}

export default CommandFactory;
