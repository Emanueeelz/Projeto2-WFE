import { Component, OnInit, Inject, ElementRef, Renderer2 } from '@angular/core';
import { FavoritosService } from '../../../services/favoritos.service';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {
  favoritos: string[] = [];

  constructor(
    @Inject(FavoritosService) private favoritosService: FavoritosService,
    private router: Router,
    private elRef: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.favoritosService.getFavoritosObservable().subscribe(favs => {
      this.favoritos = favs;
      console.log("Jogos nos favoritos:", this.favoritos);
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.fecharModal();
      }
    });
  }

  irParaPagina(jogo: string) {
    const rotas: { [key: string]: string } = {
      'Clash Royale': 'clash',
      'Cyberpunk 2077': 'cyberpunk',
      'Dark Souls 3': 'dark-souls',
      'Red Dead Redemption 2': 'red-dead',
      "JoJo's Bizarre Adventure: Heritage for the Future": 'jojo',
      'Chrono Trigger': 'chrono-trigger',
      'Counter-Strike: Global Offensive': 'csgo',
      'Mineirinho Ultra Adventure': 'mineirinho',
      'Blasphemous': 'blasphemous'
    };

    const rota = rotas[jogo] || 'home';

    this.fecharModal();
    this.router.navigate([rota]);
  }

  private fecharModal() {
    const modalElement = this.elRef.nativeElement.querySelector('#favoritosModal');

    if (modalElement) {
      this.renderer.setStyle(modalElement, 'display', 'none');
    }

    this.removerBackdrop();
    this.favoritosService.fecharModalFavoritos();
  }

  private removerBackdrop() {
    setTimeout(() => {
      document.querySelectorAll('.modal-backdrop').forEach(backdrop => backdrop.remove());

      if (document.body.classList.contains('modal-open')) {
        document.body.classList.remove('modal-open');
      }

      document.body.removeAttribute('style'); // Remove qualquer estilo inline do body
    }, 300);
  }
}








