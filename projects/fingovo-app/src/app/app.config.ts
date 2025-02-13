import {
    ApplicationConfig,
    provideZoneChangeDetection,
    isDevMode,
    importProvidersFrom,
} from "@angular/core";
import {
    PreloadAllModules,
    provideRouter,
    RouteReuseStrategy,
    withPreloading,
} from "@angular/router";
import { provideIonicAngular, IonicRouteStrategy } from "@ionic/angular/standalone";

import { routes } from "./app.routes";
import { provideHttpClient } from "@angular/common/http";
import { provideServiceWorker } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { provideStore } from "@ngrx/store";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

export const appConfig: ApplicationConfig = {
    providers: [
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes, withPreloading(PreloadAllModules)),
        provideIonicAngular(),
        provideHttpClient(),
        provideServiceWorker("ngsw-worker.js", {
            enabled: !isDevMode(),
            // Register the ServiceWorker as soon as the application is stable
            // or after 30 seconds (whichever comes first).
            registrationStrategy: "registerWhenStable:30000",
        }),
        provideStore(),
        environment.providers,
        importProvidersFrom([BrowserAnimationsModule]),
    ],
};
