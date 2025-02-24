import { Component } from '@angular/core';
import { CabecaJogoComponent } from '../../subpage/cabeca-jogo/cabeca-jogo.component';
import { RodapeJogoComponent } from '../../subpage/rodape-jogo/rodape-jogo.component';
import { CorpoJogoComponent } from "../../subpage/corpo-jogo/corpo-jogo.component";

@Component({
  selector: 'app-pagina-red-dead',
  standalone: true,
  imports: [CabecaJogoComponent, RodapeJogoComponent, CorpoJogoComponent],
  templateUrl: './pagina-red-dead.component.html',
  styleUrl: './pagina-red-dead.component.css'
})
export class PaginaRedDeadComponent {

}
