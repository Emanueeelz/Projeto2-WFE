import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from './_components/cabecalho/cabecalho.component';
import { RodapeComponent } from './_components/rodape/rodape.component';
import { FormularioComponent } from './_components/formulario/formulario.component';
import { CartaoComponent } from './_components/cartao/cartao.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CabecalhoComponent, RodapeComponent, CartaoComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'projeto_2';
}
