import { Component, HostListener  } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isScrolled: boolean = false;
  @HostListener('window:scroll', [])

  onWindowScroll() {
    if (window.pageYOffset > 50) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }

}
