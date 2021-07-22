import IHandler from '../core/commands/IHandler';
import { inject, injectable } from 'tsyringe';
import IPathService from '../core/services/IPathService';
import IDotnetService from '../core/services/IDotnetService';

@injectable()
class DotnetApiCommand implements IHandler {
  constructor(
    @inject('PathService') private _pathService: IPathService,
    @inject('DotnetService') private _dotnetService: IDotnetService
  ) {}

  Handle(): void {
    const domain = this.GetDomainName();
    this._dotnetService.CreateBaseFolders();
  }

  private GetDomainName() {
    return this._pathService.GetCurrentLastPath();
  }
}

export default DotnetApiCommand;
