import { Component } from '@angular/core';
import { FormularioComponent } from "../formulario/formulario.component";

@Component({
  selector: 'app-cabecalho',
  standalone: true,
  imports: [FormularioComponent],
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.css'
})
export class CabecalhoComponent {

}
