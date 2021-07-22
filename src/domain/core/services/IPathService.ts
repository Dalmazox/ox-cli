interface IPathService {
  GetCurrentLastPath(): string;
  CreateFolder(pathName: string): void;
}

export default IPathService;
