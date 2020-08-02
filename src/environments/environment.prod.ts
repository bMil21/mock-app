import { Environment } from 'src/app/models/environment.model';
import { DefaultApiRoutes } from 'src/app/consts/default-api-routes';

export const environment: Environment = {
  production: true,
  apiRoutes: DefaultApiRoutes,
  target: 'prod'
};
