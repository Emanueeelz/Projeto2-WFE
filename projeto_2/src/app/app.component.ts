import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from './_components/cabecalho/cabecalho.component';
import { RodapeComponent } from './_components/rodape/rodape.component';
import { CartaoComponent } from './_components/cartao/cartao.component';
import { CorpoSiteComponent } from "./_components/corpo-site/corpo-site.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CabecalhoComponent, RodapeComponent, CartaoComponent, CorpoSiteComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'projeto_2';
}
