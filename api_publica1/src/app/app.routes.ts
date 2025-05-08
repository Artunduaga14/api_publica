import { Routes } from '@angular/router';
import { IndiceUserComponent } from './indice-user/indice-user.component';
import { IndiceTodoComponent } from './indice-todo/indice-todo.component';

export const routes: Routes = [
    {path: 'user', component: IndiceUserComponent},
    {path: 'todo', component: IndiceTodoComponent}
];
