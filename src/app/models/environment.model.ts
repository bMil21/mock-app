import { ApiRoutes } from './api-route';

export interface Environment {
    production: boolean;
    apiRoutes: ApiRoutes;
    target: 'mock' | 'demo' | 'prod';
}
