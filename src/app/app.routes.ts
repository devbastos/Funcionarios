import { Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { EditarComponent } from './pages/editar/editar.component';
import { HomeComponent } from './pages/home/home.component';


export const routes: Routes = [
    {path:'', component: HomeComponent},
    {path: 'cadastro', component: CadastroComponent},
    {path: 'editar/:id', component: EditarComponent},
];

