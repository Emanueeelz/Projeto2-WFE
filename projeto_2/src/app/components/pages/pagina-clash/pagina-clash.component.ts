import { Component, inject, OnInit } from '@angular/core';
import { CabecaJogoComponent } from '../../subpage/cabeca-jogo/cabeca-jogo.component';
import { RodapeJogoComponent } from "../../subpage/rodape-jogo/rodape-jogo.component";
import { CorpoJogoComponent } from "../../subpage/corpo-jogo/corpo-jogo.component";
import { ApiService } from '../../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagina-clash',
  standalone: true,
  imports: [CommonModule, CabecaJogoComponent, RodapeJogoComponent, CorpoJogoComponent],
  templateUrl: './pagina-clash.component.html',
  styleUrls: ['./pagina-clash.component.css']
})
export class PaginaClashComponent implements OnInit {
  private apiService = inject(ApiService);
  jogo: any;

  ngOnInit(): void {
    console.log("PaginaClashComponent carregado");

    this.apiService.getJogoById(1).subscribe({
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
