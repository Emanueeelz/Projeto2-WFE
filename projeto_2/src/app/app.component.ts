import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from './_components/cabecalho/cabecalho.component';
import { RodapeComponent } from './_components/rodape/rodape.component';
import { CartaoComponent } from './_components/cartao/cartao.component';
import { CorpoSiteComponent } from "./_components/corpo-site/corpo-site.component";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CabecalhoComponent, RodapeComponent, CartaoComponent, CorpoSiteComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'projeto_2';
  currentRoute: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }

  isHomeRoute(): boolean {
    return this.currentRoute === '/';
  }
}
