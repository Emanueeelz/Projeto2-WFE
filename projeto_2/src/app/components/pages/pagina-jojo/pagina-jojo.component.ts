import { Component, inject } from '@angular/core';
import { CabecaJogoComponent } from '../../subpage/cabeca-jogo/cabeca-jogo.component';
import { RodapeJogoComponent } from "../../subpage/rodape-jogo/rodape-jogo.component";
import { CorpoJogoComponent } from "../../subpage/corpo-jogo/corpo-jogo.component";
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-pagina-jojo',
  standalone: true,
  imports: [CabecaJogoComponent, RodapeJogoComponent, CorpoJogoComponent],
  templateUrl: './pagina-jojo.component.html',
  styleUrls: ['./pagina-jojo.component.css']
})
export class PaginaJojoComponent {
  private apiService = inject(ApiService);

  constructor() {
    console.log("PaginaJojoComponent");
    this.apiService.getJogoById(14).subscribe(data => {
      console.log("data", data);
    });
  }
}
