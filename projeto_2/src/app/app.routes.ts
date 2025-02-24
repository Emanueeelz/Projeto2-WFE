import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importação dos componentes
import { PaginaClashComponent } from './_components/pages/pagina-clash/pagina-clash.component';
import { PaginaCyberComponent } from './_components/pages/pagina-cyber/pagina-cyber.component';
import { PaginaDarkSoulsComponent } from './_components/pages/pagina-dark-souls/pagina-dark-souls.component';
import { PaginaRedDeadComponent } from './_components/pages/pagina-red-dead/pagina-red-dead.component';
import { PaginaJojoComponent } from './_components/pages/pagina-jojo/pagina-jojo.component';
import { PaginaChronoComponent } from './_components/pages/pagina-chrono/pagina-chrono.component';
import { PaginaCsComponent } from './_components/pages/pagina-cs/pagina-cs.component';
import { PaginaMineirinhoComponent } from './_components/pages/pagina-mineirinho/pagina-mineirinho.component';
import { PaginaBlasComponent } from './_components/pages/pagina-blas/pagina-blas.component';
import { CorpoSiteComponent } from './_components/home/corpo-site/corpo-site.component';

// Exportando a constante de rotas
export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: CorpoSiteComponent },
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

