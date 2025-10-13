import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,       // adiciona standalone
  imports: [RouterOutlet], // ok para standalone
  templateUrl: './app.html',
  styleUrls: ['./app.scss']  // corrigido
})
export class App {
  protected readonly title = signal('desafio-picpay');
}
