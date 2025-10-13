import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { appRouting } from './app/app-routing.module';

bootstrapApplication(App, {
  providers: [appRouting]
});
