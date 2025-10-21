import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  submitForm(event: Event) {
    event.preventDefault();
    alert('धन्यवाद! हम शीघ्र संपर्क करेंगे।');
  }
}
