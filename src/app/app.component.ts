import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fronted-clean-arquitecture';
  showForm: boolean = false;

  openForm() {
    this.showForm = true;
  }

  closeForm() {
    this.showForm = false;
  }
}

