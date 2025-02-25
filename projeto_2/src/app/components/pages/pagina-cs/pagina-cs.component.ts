import { Component, inject } from '@angular/core';
import { CabecaJogoComponent } from '../../subpage/cabeca-jogo/cabeca-jogo.component';
import { RodapeJogoComponent } from "../../subpage/rodape-jogo/rodape-jogo.component";
import { CorpoJogoComponent } from "../../subpage/corpo-jogo/corpo-jogo.component";
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-pagina-cs',
  standalone: true,
  imports: [CabecaJogoComponent, RodapeJogoComponent, CorpoJogoComponent],
  templateUrl: './pagina-cs.component.html',
  styleUrls: ['./pagina-cs.component.css']
})
export class PaginaCsComponent {
  private apiService = inject(ApiService);

  constructor() {
    console.log("PaginaCsComponent");
    this.apiService.getJogoById(11).subscribe(data => {
      console.log("data", data);
    });
  }
}
