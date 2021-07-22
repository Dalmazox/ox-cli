import { DependencyContainer } from 'tsyringe';
import ICommandFactory from '../../../domain/core/factories/ICommandFactory';
import CommandFactory from '../../../domain/factories/CommandFactory';

class FactoryModule {
  static Configure(container: DependencyContainer) {
    container.registerSingleton<ICommandFactory>(
      'CommandFactory',
      CommandFactory
    );
  }
}

export default FactoryModule;
