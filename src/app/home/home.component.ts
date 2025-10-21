import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  submitForm(event: Event) {
    event.preventDefault();
    alert('धन्यवाद! हम शीघ्र संपर्क करेंगे।');
  }

  // Close menu when clicking outside
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.navbar') && this.isMenuOpen) {
      this.closeMenu();
    }
  }

  // Close menu on escape key press
  @HostListener('document:keydown.escape')
  onEscapePress() {
    this.closeMenu();
  }
}