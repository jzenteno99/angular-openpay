import { Routes } from '@angular/router';
import { BitacoraComponent } from './componets/bitacora/bitacora.component';
import { CharactersComponent } from './componets/characters/characters.component';

export const routes: Routes = [
    {path: '', component: CharactersComponent},
    {path: 'log', component: BitacoraComponent}
];
