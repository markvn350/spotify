import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { FormsModule } from '@angular/forms';
import { ROUTES, RouterModule, provideRouter, withComponentInputBinding } from '@angular/router';
import { AppRoutingModule, routes } from './app/app.routes';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { InjectSessioInterceptor } from '@core/interceptors/inject-sessio.interceptor';
import { HTTP_INTERCEPTORS, withInterceptorsFromDi, provideHttpClient, withInterceptors } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { authorizationInterceptor } from '@core/interceptors/session.interceptor';


bootstrapApplication(AppComponent, {
    providers: [
        provideRouter(routes, withComponentInputBinding()),
        importProvidersFrom(BrowserModule, AppRoutingModule, RouterModule, FormsModule),
        CookieService,

        provideHttpClient(withInterceptors([authorizationInterceptor]))
    ]
})
  .catch(err => console.error(err));
