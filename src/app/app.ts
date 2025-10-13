import { Component } from '@angular/core';
import { UserListComponent } from './components/user-list/user-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserListComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {}
