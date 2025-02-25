import { Component, inject } from '@angular/core';
import { CabecaJogoComponent } from '../../subpage/cabeca-jogo/cabeca-jogo.component';
import { RodapeJogoComponent } from "../../subpage/rodape-jogo/rodape-jogo.component";
import { CorpoJogoComponent } from "../../subpage/corpo-jogo/corpo-jogo.component";
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-pagina-clash',
  standalone: true,
  imports: [CabecaJogoComponent, RodapeJogoComponent, CorpoJogoComponent],
  templateUrl: './pagina-clash.component.html',
  styleUrls: ['./pagina-clash.component.css']
})
export class PaginaClashComponent {
  private apiService = inject(ApiService);

  constructor() {
    console.log("PaginaClashComponent");
    this.apiService.getJogoById(1).subscribe(data => {
      console.log("data",data);
    });
  }
}
