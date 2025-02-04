import { Component } from '@angular/core';
import { FormularioComponent } from "../formulario/formulario.component";
import { MagoComponent } from "../mago/mago.component";
import { SobreComponent } from "../sobre/sobre.component";

@Component({
  selector: 'app-cabecalho',
  standalone: true,
  imports: [FormularioComponent, MagoComponent, SobreComponent],
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.css'
})
export class CabecalhoComponent {
  isMagoOpen = false;
  isSobreOpen = false;

  abrirMago() {
    this.isMagoOpen = true;
  }

  fecharMago() {
    this.isMagoOpen = false;
  }

  abrirSobre() {
    this.isSobreOpen = true;
  }

  fecharSobre() {
    this.isSobreOpen = false;
  }
}
