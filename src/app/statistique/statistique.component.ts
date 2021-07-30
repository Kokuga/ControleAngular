import { Component, OnInit } from '@angular/core';
import {Statistique} from '../../models/statistique';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {
  public stat1: Statistique = new Statistique('dqzbid-dqdzq8dqzd', 'Une tongue à la mer', '50', 'SUCCESS');
  public stat2: Statistique = new Statistique('dqzbid-454484dzqdqz', 'Les JO du japon', '999', 'WARNING');
  constructor() {}

  ngOnInit(): void {
  }

}
