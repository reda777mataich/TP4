import { Component, signal } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet
  ]
})
export class App {
  protected readonly title = signal('first-app');
  email : String="ffff@gmail.com"
}
