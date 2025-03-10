import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritosService } from '../../../services/favoritos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabeca-jogo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cabeca-jogo.component.html',
  styleUrls: ['./cabeca-jogo.component.css']
})
export class CabecaJogoComponent implements OnInit {
  favoritos: string[] = [];

  constructor(
    @Inject(FavoritosService) private favoritosService: FavoritosService,
    private router: Router
  ) {}

  ngOnInit() {
    this.favoritosService.getFavoritosObservable().subscribe(favs => {
      this.favoritos = favs;
    });

    this.favoritos = this.favoritosService.getFavoritos();
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

    const modalElement = document.getElementById('favoritosModal');
    if (modalElement) {
      modalElement.classList.remove('show');
      modalElement.setAttribute('aria-hidden', 'true');
      modalElement.style.display = 'none';
    }

    const backdrop = document.querySelector('.modal-backdrop');
    if (backdrop) {
      backdrop.remove();
    }

    document.body.classList.remove('modal-open');
    document.body.style.overflow = '';

    this.router.navigate(['/', rota]);
  }
}