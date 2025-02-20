import { Component } from '@angular/core';
import { CabecalhoComponent } from "../cabecalho/cabecalho.component";
import { CartaoComponent } from "../cartao/cartao.component";
import { RodapeComponent } from "../rodape/rodape.component";
import { FormularioComponent } from "../formulario/formulario.component";
import { RouterModule } from '@angular/router'; // Importando RouterModule para usar o router-outlet

@Component({
  selector: 'app-corpo-site',
  standalone: true,
  imports: [
    CabecalhoComponent,
    CartaoComponent,
    RodapeComponent,
    FormularioComponent,
    RouterModule // Importando RouterModule aqui para o uso do router-outlet
  ],
  templateUrl: './corpo-site.component.html',
  styleUrls: ['./corpo-site.component.css']
})
export class CorpoSiteComponent { }
