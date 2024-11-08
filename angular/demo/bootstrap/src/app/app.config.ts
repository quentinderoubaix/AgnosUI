import {provideClientHydration} from '@angular/platform-browser';
import {provideRouter} from '@angular/router';
import {ROUTES} from './app.routes';
import {provideExperimentalZonelessChangeDetection, type ApplicationConfig} from '@angular/core';

export const appConfig: ApplicationConfig = {
	providers: [provideRouter(ROUTES), provideClientHydration(), provideExperimentalZonelessChangeDetection()],
};
