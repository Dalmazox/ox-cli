import path from 'path';
import fs from 'fs';
import { injectable } from 'tsyringe';
import IPathService from '../core/services/IPathService';

@injectable()
class PathService implements IPathService {
  CreateFolder(pathName: string): void {
    const isDev = process.env.ENV == 'development';
    const parsedPathName = [
      isDev ? this.GetPlaygroudPath() : process.cwd(),
      ...pathName.split('/'),
    ];
    const fullPath = path.resolve(...parsedPathName);

    if (fs.existsSync(fullPath)) return;

    fs.mkdirSync(fullPath);
  }

  GetCurrentLastPath(): string {
    const pathArray = process.cwd().split('/');
    return pathArray[pathArray.length - 1];
  }

  private GetPlaygroudPath() {
    const playgroundPath = path.resolve(process.cwd(), 'playground');

    if (!fs.existsSync(playgroundPath)) fs.mkdirSync(playgroundPath);

    return playgroundPath;
  }
}

export default PathService;
