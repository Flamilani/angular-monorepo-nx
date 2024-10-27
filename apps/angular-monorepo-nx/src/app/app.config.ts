import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAuth0 } from '@auth0/auth0-angular';
import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideAuth0({
      domain: 'dev-angular-monorepo-nx.us.auth0.com',
      clientId: 'MFvwAIDWNasvVaGLwgCQIvTUuxoQa4tS',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ],
};
