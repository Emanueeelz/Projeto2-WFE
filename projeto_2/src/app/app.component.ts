import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from './_components/cabecalho/cabecalho.component';
import { RodapeComponent } from './_components/rodape/rodape.component';
import { ContatoComponent } from './_components/contato/contato.component';
import { FormularioComponent } from './_components/formulario/formulario.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CabecalhoComponent, RodapeComponent, ContatoComponent, FormularioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto_2';
}
