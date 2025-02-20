import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importação dos componentes
import { PaginaClashComponent } from './_components/pagina-clash/pagina-clash.component';
import { PaginaCyberComponent } from './_components/pagina-cyber/pagina-cyber.component';
import { PaginaDarkSoulsComponent } from './_components/pagina-dark-souls/pagina-dark-souls.component';
import { PaginaRedDeadComponent } from './_components/pagina-red-dead/pagina-red-dead.component';
import { PaginaJojoComponent } from './_components/pagina-jojo/pagina-jojo.component';
import { PaginaChronoComponent } from './_components/pagina-chrono/pagina-chrono.component';
import { PaginaCsComponent } from './_components/pagina-cs/pagina-cs.component';
import { PaginaMineirinhoComponent } from './_components/pagina-mineirinho/pagina-mineirinho.component';
import { PaginaBlasComponent } from './_components/pagina-blas/pagina-blas.component';
import { CorpoSiteComponent } from './_components/corpo-site/corpo-site.component'; // Certifique-se de importar o CorpoSiteComponent

// Exportando a constante de rotas
export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Rota padrão para a página inicial
  { path: 'home', component: CorpoSiteComponent }, // Página inicial, que é o CorpoSiteComponent
  { path: 'clash', component: PaginaClashComponent },
  { path: 'cyberpunk', component: PaginaCyberComponent },
  { path: 'dark-souls', component: PaginaDarkSoulsComponent },
  { path: 'red-dead', component: PaginaRedDeadComponent },
  { path: 'jojo', component: PaginaJojoComponent },
  { path: 'chrono-trigger', component: PaginaChronoComponent },
  { path: 'csgo', component: PaginaCsComponent },
  { path: 'mineirinho', component: PaginaMineirinhoComponent },
  { path: 'blasphemous', component: PaginaBlasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configurações de rota
  exports: [RouterModule]
})
export class AppRoutingModule {}

