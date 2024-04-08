import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pipenew';

  toDate = new Date();

  sampleMessage = "Welcome To angular Pipe example";

  price = 17;
}
