import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [
    { id: 1, name: 'Abraão', username: '@abraao', email: 'abraao@email.com', balance: 1200 },
    { id: 2, name: 'Maria', username: '@maria', email: 'maria@email.com', balance: 850 },
    { id: 3, name: 'João', username: '@joao', email: 'joao@email.com', balance: 430 },
    { id: 4, name: 'Jéssica', username: '@jessica', email: 'jessica@email.com', balance: 380}
  ];

  getUsers() {
    return this.users;
  }
}
