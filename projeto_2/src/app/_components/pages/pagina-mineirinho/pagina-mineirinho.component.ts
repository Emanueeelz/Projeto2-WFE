import { Component } from '@angular/core';
import { CabecaJogoComponent } from '../../cabeca-jogo/cabeca-jogo.component';
import { RodapeJogoComponent } from "../../rodape-jogo/rodape-jogo.component";
import { CorpoJogoComponent } from "../../corpo-jogo/corpo-jogo.component";

@Component({
  selector: 'app-pagina-mineirinho',
  standalone: true,
  imports: [CabecaJogoComponent, RodapeJogoComponent, CorpoJogoComponent],
  templateUrl: './pagina-mineirinho.component.html',
  styleUrl: './pagina-mineirinho.component.css'
})
export class PaginaMineirinhoComponent {

}
