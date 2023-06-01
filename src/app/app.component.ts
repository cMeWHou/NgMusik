import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'music';

  public isOpen = false;

  OpenModal() {
    this.isOpen = true;
  }

  CloseModal() {
    this.isOpen = false;
  }
}
