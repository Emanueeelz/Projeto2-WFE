import { Component } from '@angular/core';
import { CabecalhoComponent } from './_components/home/cabecalho/cabecalho.component';
import { RodapeComponent } from './_components/home/rodape/rodape.component';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { CorpoSiteComponent } from "./_components/home/corpo-site/corpo-site.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CabecalhoComponent,
    RodapeComponent,
    RouterModule,
    CorpoSiteComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'projeto_2';

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
      }
    });
  }
}
