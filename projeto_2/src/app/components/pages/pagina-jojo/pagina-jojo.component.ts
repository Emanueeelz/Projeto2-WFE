import { Component, inject, OnInit } from '@angular/core';
import { CabecaJogoComponent } from '../../subpage/cabeca-jogo/cabeca-jogo.component';
import { RodapeJogoComponent } from "../../subpage/rodape-jogo/rodape-jogo.component";
import { CorpoJogoComponent } from "../../subpage/corpo-jogo/corpo-jogo.component";
import { ApiService } from '../../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagina-jojo',
  standalone: true,
  imports: [CommonModule, CabecaJogoComponent, RodapeJogoComponent, CorpoJogoComponent],
  templateUrl: './pagina-jojo.component.html',
  styleUrls: ['./pagina-jojo.component.css']
})
export class PaginaJojoComponent implements OnInit {
  private apiService = inject(ApiService);
  jogo: any;

  ngOnInit(): void {
    console.log("paginajojocomponent carregado");
    this.apiService.getJogoById(5).subscribe({
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
