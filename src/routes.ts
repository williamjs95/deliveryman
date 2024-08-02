import { Router } from 'express';
import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController'
import { AuthenticateClientController } from './modules/account/authenticateClient/AuthenticateClientController'

const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();

routes.post('/authenticate', authenticateClientController.handle)

routes.post('/client/', createClientController.handle)

export { routes };