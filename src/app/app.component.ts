import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CharactersComponent } from './componets/characters/characters.component';
import { DetailCharacterComponent } from './componets/modal/detail-character/detail-character.component';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    CharactersComponent,
    DetailCharacterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Jonathan Zenteno Ocampo';
}
