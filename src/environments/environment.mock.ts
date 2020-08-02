import { Environment } from 'src/app/models/environment.model';
import { MockApiRoutes } from 'src/app/consts/mock-api-routes';

export const environment: Environment = {
  production: false,
  apiRoutes: MockApiRoutes,
  target: 'mock'
};
