import type {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';
import {ROUTES} from './app.routes';
import {provideClientHydration} from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
	providers: [provideRouter(ROUTES), provideClientHydration()],
};
