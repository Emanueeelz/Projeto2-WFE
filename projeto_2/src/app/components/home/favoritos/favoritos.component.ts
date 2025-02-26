import { Component, OnInit, Inject } from '@angular/core';
import { FavoritosService } from '../../../services/favoritos.service';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationStart } from '@angular/router'; 
import * as bootstrap from 'bootstrap';

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
    private router: Router
  ) {}

  ngOnInit() {
    this.favoritosService.getFavoritosObservable().subscribe(favs => {
      this.favoritos = favs;
      console.log("Jogos nos favoritos:", this.favoritos);
    });


    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.fecharModalBootstrap();
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


    this.fecharModalBootstrap();


    this.router.navigate([rota]);
  }

  private fecharModalBootstrap() {
    const modalElement = document.getElementById('favoritosModal');

    if (modalElement) {
      const modalInstance = bootstrap.Modal.getInstance(modalElement);
      if (modalInstance) {
        modalInstance.hide();
      }
    }


    this.removerBackdrop();


    this.favoritosService.fecharModalFavoritos();
  }

  removerBackdrop() {
    setTimeout(() => {
      document.querySelectorAll('.modal-backdrop').forEach(backdrop => backdrop.remove());
      document.body.classList.remove('modal-open');
      document.body.style.overflow = 'auto';
    }, 300);
  }
}







