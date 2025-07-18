import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule }      from '@angular/router';
import { HttpClientModule }  from '@angular/common/http';
import { AppComponent }      from './app/app.component';
import { routes }            from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      RouterModule.forRoot(routes),
      HttpClientModule
    )
  ]
}).catch(err => console.error(err));
