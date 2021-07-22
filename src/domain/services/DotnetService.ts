import { inject, injectable } from 'tsyringe';
import IDotnetService from '../core/services/IDotnetService';
import IPathService from '../core/services/IPathService';

@injectable()
class DotnetService implements IDotnetService {
  private _folders: string[] = [
    'Domain',
    'Infra',
    'Infra/Infra.CrossCutting',
    'Tests',
  ];

  constructor(@inject('PathService') private _pathService: IPathService) {}

  CreateBaseFolders(): void {
    for (let folder of this._folders) {
      this._pathService.CreateFolder(folder);
    }
  }
}

export default DotnetService;
