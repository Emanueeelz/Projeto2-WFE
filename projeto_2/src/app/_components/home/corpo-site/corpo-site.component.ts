import { Component } from '@angular/core';
import { CabecalhoComponent } from "../cabecalho/cabecalho.component";
import { CartaoComponent } from "../cartao/cartao.component";
import { RodapeComponent } from "../rodape/rodape.component";
import { FormularioComponent } from "../formulario/formulario.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-corpo-site',
  standalone: true,
  imports: [
    CabecalhoComponent,
    CartaoComponent,
    RodapeComponent,
    RouterModule
  ],
  templateUrl: './corpo-site.component.html',
  styleUrls: ['./corpo-site.component.css']
})
export class CorpoSiteComponent { }
