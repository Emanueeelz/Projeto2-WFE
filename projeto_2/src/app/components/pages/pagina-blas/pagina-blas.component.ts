import { Component, inject } from '@angular/core';
import { CabecaJogoComponent } from '../../subpage/cabeca-jogo/cabeca-jogo.component';
import { RodapeJogoComponent } from "../../subpage/rodape-jogo/rodape-jogo.component";
import { CorpoJogoComponent } from "../../subpage/corpo-jogo/corpo-jogo.component";
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-pagina-blas',
  standalone: true,
  imports: [CabecaJogoComponent, RodapeJogoComponent, CorpoJogoComponent],
  templateUrl: './pagina-blas.component.html',
  styleUrls: ['./pagina-blas.component.css']
})
export class PaginaBlasComponent {
  private apiService = inject(ApiService);

  constructor() {
    console.log("PaginaBlasComponent");
    this.apiService.getJogoById(9).subscribe(data => {
      console.log("data", data);
    });
  }
}
