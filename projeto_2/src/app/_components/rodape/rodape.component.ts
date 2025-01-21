import { Component, HostListener } from '@angular/core';
import { ContatoComponent } from '../contato/contato.component';

@Component({
  selector: 'app-rodape',
  standalone: true,
  imports: [ContatoComponent],
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css']
})
export class RodapeComponent {

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const backToTopButton = document.getElementById('back-to-top');
    const scrollPosition = window.pageYOffset;
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;

    if (scrollPosition > 100 && scrollPosition < (documentHeight - windowHeight - 200)) {
      backToTopButton?.classList.add('show');
    } else {
      backToTopButton?.classList.remove('show');
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
