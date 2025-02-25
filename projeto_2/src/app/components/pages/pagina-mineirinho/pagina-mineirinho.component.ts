import { Component, inject } from '@angular/core';
import { CabecaJogoComponent } from '../../subpage/cabeca-jogo/cabeca-jogo.component';
import { RodapeJogoComponent } from "../../subpage/rodape-jogo/rodape-jogo.component";
import { CorpoJogoComponent } from "../../subpage/corpo-jogo/corpo-jogo.component";
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-pagina-mineirinho',
  standalone: true,
  imports: [CabecaJogoComponent, RodapeJogoComponent, CorpoJogoComponent],
  templateUrl: './pagina-mineirinho.component.html',
  styleUrls: ['./pagina-mineirinho.component.css']
})
export class PaginaMineirinhoComponent {
  private apiService = inject(ApiService);

  constructor() {
    console.log("PaginaMineirinhoComponent");
    this.apiService.getJogoById(19).subscribe(data => {
      console.log("data", data);
    });
  }
}
