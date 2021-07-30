import {Component, OnInit} from '@angular/core';
import {Statistique} from '../../models/statistique';
import {StatistiqueService} from '../statistique.service';
import {HttpClient} from '@angular/common/http';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {

  public StatsArray!: Statistique[];
  public id = '';
  public title = '';
  public value = '';
  public appreciation = '';

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

  submit() {
    this.http.post('https://stats.naminilamy.fr', {
      id: this.id,
      value: this.value,
      title: this.title,
      appreciation: this.appreciation
    })
      .subscribe((data: any) => {
        this.StatsArray.push(new Statistique(data.id, data.value, data.title, data.appreciation));
      });
  }
}
