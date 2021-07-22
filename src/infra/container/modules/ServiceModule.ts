import { DependencyContainer } from 'tsyringe';
import IDotnetService from '../../../domain/core/services/IDotnetService';
import IPathService from '../../../domain/core/services/IPathService';
import DotnetService from '../../../domain/services/DotnetService';
import PathService from '../../../domain/services/PathService';

class ServiceModule {
  static Configure(container: DependencyContainer) {
    container
      .registerSingleton<IPathService>('PathService', PathService)
      .registerSingleton<IDotnetService>('DotnetService', DotnetService);
  }
}

export default ServiceModule;
