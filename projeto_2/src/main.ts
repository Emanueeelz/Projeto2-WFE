import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router'; // Adiciona suporte ao roteamento
import { routes } from './app/app.routes'; // Importando as rotas definidas

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    provideRouter(routes), // Configura o roteamento
  ],
})
  .catch((err) => console.error(err));
