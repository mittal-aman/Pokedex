import { Component } from '@angular/core';
import { EmbedVideoService } from 'ngx-embed-video';
import {data} from '../pokeData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pokedex';
  heroes = [];

  myArray = ['https://media.giphy.com/media/l3n2pVYnj11hm/giphy.gif', 'https://media.giphy.com/media/slVWEctHZKvWU/giphy.gif', 'https://media.giphy.com/media/12r4pHjvAOv48o/giphy.gif'];

  rand = 0;

  searchPoke(newHero: any) {
    this.heroes.length = 0;
    this.rand = Math.floor(Math.random() * this.myArray.length);
    if (newHero) {
      data.map((item) => {
        if (item.Name === newHero){
          this.heroes.push(item);
        }
      })
    }
  }

}
