import {Component, OnInit} from '@angular/core';
import {Statistique} from '../../models/statistique';
import {StatistiqueService} from '../statistique.service';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {

  public StatsArray!: Statistique[];

  constructor(private Stats: StatistiqueService, private http: HttpClient) {

    this.Stats.getStatistiques()
      .then((array) => (this.StatsArray = array));
  }


  ngOnInit(): void {
  }


  deleteStat(id: string) {
    this.http.delete('https://stats.naminilamy.fr/' + id)
      .toPromise()
      .then(() => {
        let removedIndex = this.StatsArray.findIndex(stat => stat.id === id);
        this.StatsArray.splice(removedIndex, 1);
      });
  }
}
