import { Component, inject } from '@angular/core';
import { CabecaJogoComponent } from '../../subpage/cabeca-jogo/cabeca-jogo.component';
import { RodapeJogoComponent } from '../../subpage/rodape-jogo/rodape-jogo.component';
import { CorpoJogoComponent } from "../../subpage/corpo-jogo/corpo-jogo.component";
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-pagina-red-dead',
  standalone: true,
  imports: [CabecaJogoComponent, RodapeJogoComponent, CorpoJogoComponent],
  templateUrl: './pagina-red-dead.component.html',
  styleUrls: ['./pagina-red-dead.component.css']
})
export class PaginaRedDeadComponent {
  private apiService = inject(ApiService);

  constructor() {
    console.log("PaginaRedDeadComponent");
    this.apiService.getJogoById(19).subscribe(data => {
      console.log("data", data);
    });
  }
}
