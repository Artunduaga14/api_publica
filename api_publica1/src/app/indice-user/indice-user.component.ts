import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { UserService } from '../services/user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-indice-user',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './indice-user.component.html',
  styleUrls: ['./indice-user.component.css']
})
export class IndiceUserComponent implements OnInit {
  users: User[] = [];
  columnas: string[] = ['id', 'name', 'email', 'username', 'acciones'];

  userService = inject(UserService);

  ngOnInit(): void {
    this.userService.getAll().subscribe({
      next: (usuarios) => {
        this.users = usuarios;
        console.log('Usuarios recibidos:', this.users);
      },
      error: (err) => {
        console.error('Error al obtener usuarios:', err);
      }
    });
  }

  editar(user: User) {
    alert(`Simular editar usuario: ${user.name}`);
  }

  eliminar(user: User) {
    alert(`Simular eliminar usuario: ${user.name}`);
  }
}
