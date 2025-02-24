import { Component, OnInit, Inject } from '@angular/core';
import { FavoritosService } from '../../../services/favoritos.service';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
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
    });
  }

  irParaPagina(jogo: string) {
    const rotas: { [key: string]: string } = {
      'Clash Royale': 'clash',
      'Cyberpunk 2077': 'cyberpunk',
      'Dark Souls': 'dark-souls',
      'Red Dead Redemption': 'red-dead',
      'JoJo Bizarre Adventure': 'jojo',
      'Chrono Trigger': 'chrono-trigger',
      'Counter-Strike': 'csgo',
      'Mineirinho': 'mineirinho',
      'Blasphemous': 'blasphemous'
    };

    const rota = rotas[jogo] || 'home';

    const modalElement = document.getElementById('favoritosModal');
    if (modalElement) {
      modalElement.classList.remove('show');
      modalElement.setAttribute('aria-hidden', 'true');
      modalElement.style.display = 'none';
  
      const backdrop = document.querySelector('.modal-backdrop');
      if (backdrop) {
        backdrop.remove();
      }
    }
  
    this.router.navigate(['/', rota]);
  }
}
