import { Component } from '@angular/core';
import { Statistique } from '../models/statistique';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public stat1: Statistique = new Statistique('dqzbid-dqdzq8dqzd', 'Une tongue à la mer', '50', 'SUCCESS');
  public stat2: Statistique = new Statistique('dqzbid-454484dzqdqz', 'Les JO du japon', '999', 'WARNING');


}
