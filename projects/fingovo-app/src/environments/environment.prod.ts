import { FingovoEnv } from './environment.model';

export const environment: FingovoEnv = {
  production: true,
  apiUrl: window.env?.apiUrl,
};
