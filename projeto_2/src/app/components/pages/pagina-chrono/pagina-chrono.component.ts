import { Component, inject } from '@angular/core';
import { CabecaJogoComponent } from '../../subpage/cabeca-jogo/cabeca-jogo.component';
import { RodapeJogoComponent } from "../../subpage/rodape-jogo/rodape-jogo.component";
import { CorpoJogoComponent } from "../../subpage/corpo-jogo/corpo-jogo.component";
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-pagina-chrono',
  standalone: true,
  imports: [CabecaJogoComponent, RodapeJogoComponent, CorpoJogoComponent],
  templateUrl: './pagina-chrono.component.html',
  styleUrls: ['./pagina-chrono.component.css']
})
export class PaginaChronoComponent {
  private apiService = inject(ApiService);

  constructor() {
    console.log("PaginaChronoComponent");
    this.apiService.getJogoById(10).subscribe(data => {
      console.log("data", data);
    });
  }
}
