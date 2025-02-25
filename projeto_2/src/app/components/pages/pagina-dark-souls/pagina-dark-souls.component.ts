import { Component, inject } from '@angular/core';
import { CabecaJogoComponent } from '../../subpage/cabeca-jogo/cabeca-jogo.component';
import { RodapeJogoComponent } from "../../subpage/rodape-jogo/rodape-jogo.component";
import { CorpoJogoComponent } from "../../subpage/corpo-jogo/corpo-jogo.component";
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-pagina-dark-souls',
  standalone: true,
  imports: [CabecaJogoComponent, RodapeJogoComponent, CorpoJogoComponent],
  templateUrl: './pagina-dark-souls.component.html',
  styleUrls: ['./pagina-dark-souls.component.css']
})
export class PaginaDarkSoulsComponent {
  private apiService = inject(ApiService);

  constructor() {
    console.log("PaginaDarkSoulsComponent");
    this.apiService.getJogoById(13).subscribe(data => {
      console.log("data", data);
    });
  }
}
