import { Component } from '@angular/core';
import { CabecalhoComponent } from "../cabecalho/cabecalho.component";
import { CartaoComponent } from "../cartao/cartao.component";
import { RodapeComponent } from "../rodape/rodape.component";
import { FormularioComponent } from "../formulario/formulario.component";

@Component({
  selector: 'app-corpo-site',
  standalone: true,
  imports: [CabecalhoComponent, CartaoComponent, RodapeComponent, FormularioComponent],
  templateUrl: './corpo-site.component.html',
  styleUrl: './corpo-site.component.css'
})
export class CorpoSiteComponent {

}
