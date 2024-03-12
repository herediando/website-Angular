import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.css'],
  animations: [
    trigger('fadeAnimation', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('1s', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class QuienesSomosComponent {
  currentSection: string = 'nosotros';

  onScroll(event: any) {
    const sections = document.querySelectorAll('.section');
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
  
    // Conversión de tipo para asegurar que cada elemento sea reconocido como HTMLElement
    sections.forEach((section) => {
      const sectionElement = section as HTMLElement;
      const sectionTop = sectionElement.offsetTop;
      const sectionHeight = sectionElement.offsetHeight;
  
      if (scrollPosition >= sectionTop - (sectionHeight / 2)) {
        this.currentSection = sectionElement.id;
      }
    });
  }
  
  
}
