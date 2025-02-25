import { Component, inject } from '@angular/core';
import { CabecaJogoComponent } from '../../subpage/cabeca-jogo/cabeca-jogo.component';
import { RodapeJogoComponent } from "../../subpage/rodape-jogo/rodape-jogo.component";
import { CorpoJogoComponent } from "../../subpage/corpo-jogo/corpo-jogo.component";
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-pagina-cyber',
  standalone: true,
  imports: [CabecaJogoComponent, RodapeJogoComponent, CorpoJogoComponent],
  templateUrl: './pagina-cyber.component.html',
  styleUrls: ['./pagina-cyber.component.css']
})
export class PaginaCyberComponent {
  private apiService = inject(ApiService);

  constructor() {
    console.log("PaginaCyberComponent");
    this.apiService.getJogoById(12).subscribe(data => {
      console.log("data", data);
    });
  }
}
