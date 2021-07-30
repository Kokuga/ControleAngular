import { Component, OnInit } from '@angular/core';
import {Statistique} from '../../models/statistique';
import {StatistiqueService} from '../statistique.service';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {

  // public stat1: Statistique;
  // public stat2: Statistique;
  // public stat3: Statistique;
  public StatsArray!: Statistique[];

  constructor(private Stats: StatistiqueService) {
    // this.stat1 = new Statistique('dqzbid-dqdzq8dqzd', 'Une tongue à la mer', '50', 'SUCCESS');
    // this.stat2 =  new Statistique('dqzbid-454484dzqdqz', 'Les JO du japon', '999', 'WARNING');
    // this.stat3 =  new Statistique('dqzbidddqzdqzd-454dzqd4', 'Oui', '4', 'DANGER');
    // this.StatsArray = [this.stat1, this.stat2, this.stat3];
    this.Stats.getStatistiques()
      .then((array) => (this.StatsArray = array));
  }

  ngOnInit(): void {
  }

}
