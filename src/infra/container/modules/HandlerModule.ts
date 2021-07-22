import { DependencyContainer } from 'tsyringe';
import DotnetApiCommand from '../../../domain/commands/DotnetApiCommand';
import ParseCommand from '../../../domain/commands/ParseCommand';
import IHandler from '../../../domain/core/commands/IHandler';

class HandlerModule {
  static Configure(container: DependencyContainer) {
    container
      .registerSingleton<IHandler>('ParseCommand', ParseCommand)
      .registerSingleton<IHandler>('DotnetApiCommand', DotnetApiCommand);
  }
}

export default HandlerModule;
