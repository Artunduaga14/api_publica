import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-indice-user',
  imports: [],
  templateUrl: './indice-user.component.html',
  styleUrl: './indice-user.component.css'
})
export class IndiceUserComponent implements OnInit {
  users: User[] = [];

  userService = inject(UserService)

  ngOnInit(): void {
    this.userService.getAll().subscribe({
      next: (sdsassa) => {
        this.users = sdsassa;
        console.log('Usuarios recibidos:', this.users);
      },
      error: (err) => {
        console.error('Error al obtener usuarios:', err);
      }
   });
  }
}