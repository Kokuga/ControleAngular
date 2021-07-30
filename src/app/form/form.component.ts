import {Component, OnInit} from '@angular/core';
import {Statistique} from '../../models/statistique';
import {StatistiqueService} from '../statistique.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

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
