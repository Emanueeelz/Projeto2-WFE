import { Component, inject, OnInit } from '@angular/core';
import { CabecaJogoComponent } from '../../subpage/cabeca-jogo/cabeca-jogo.component';
import { RodapeJogoComponent } from "../../subpage/rodape-jogo/rodape-jogo.component";
import { CorpoJogoComponent } from "../../subpage/corpo-jogo/corpo-jogo.component";
import { ApiService } from '../../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagina-chrono',
  standalone: true,
  imports: [CommonModule, CabecaJogoComponent, RodapeJogoComponent, CorpoJogoComponent],
  templateUrl: './pagina-chrono.component.html',
  styleUrls: ['./pagina-chrono.component.css']
})
export class PaginaChronoComponent implements OnInit {
  private apiService = inject(ApiService);
  jogo: any;

  ngOnInit(): void {
    console.log("PaginaChronoComponent carregado");

    this.apiService.getJogoById(6).subscribe({
      next: (data) => {
        this.jogo = data;
        console.log("Dados do jogo recebidos:", this.jogo);
      },
      error: (error) => {
        console.error("Erro ao buscar os dados do jogo:", error);
      }
    });
  }
}
