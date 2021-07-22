import { container } from 'tsyringe';
import HandlerModule from './modules/HandlerModule';
import FactoryModule from './modules/FactoryModule';

FactoryModule.Configure(container);
HandlerModule.Configure(container);

export default container;
