import IHandler from '../commands/IHandler';
import CommandType from '../enums/CommandType';

interface ICommandFactory {
  Build(command: CommandType): IHandler;
}

export default ICommandFactory;
