import { MockApiRoutes } from 'src/app/consts/mock-api-routes';
import { Environment } from 'src/app/models/environment.model';

export const environment: Environment = {
  production: false,
  apiRoutes: MockApiRoutes,
  target: 'demo'
};