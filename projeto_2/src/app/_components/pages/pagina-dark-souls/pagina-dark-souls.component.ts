import { Component } from '@angular/core';
import { CabecaJogoComponent } from '../../cabeca-jogo/cabeca-jogo.component';
import { RodapeJogoComponent } from "../../rodape-jogo/rodape-jogo.component";
import { CorpoJogoComponent } from "../../corpo-jogo/corpo-jogo.component";

@Component({
  selector: 'app-pagina-dark-souls',
  standalone: true,
  imports: [CabecaJogoComponent, RodapeJogoComponent, CorpoJogoComponent],
  templateUrl: './pagina-dark-souls.component.html',
  styleUrl: './pagina-dark-souls.component.css'
})
export class PaginaDarkSoulsComponent {

}
