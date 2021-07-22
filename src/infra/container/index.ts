import { container } from 'tsyringe';
import HandlerModule from './modules/HandlerModule';
import FactoryModule from './modules/FactoryModule';
import ServiceModule from './modules/ServiceModule';

FactoryModule.Configure(container);
HandlerModule.Configure(container);
ServiceModule.Configure(container);

export default container;
