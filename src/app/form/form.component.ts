import {Component, OnInit} from '@angular/core';
import {Statistique} from '../../models/statistique';
import {StatistiqueService} from '../statistique.service';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from "@angular/router";

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
  public status = '';

  constructor(private Stats: StatistiqueService, private http: HttpClient, private route: ActivatedRoute) {

    this.Stats.getStatistiques()
      .then((array) => (this.StatsArray = array));
  }

  ngOnInit(): void {
    this.status = 'create';
    if (this.route.snapshot.paramMap.get('statistiqueId')) {
      this.status = 'edit',
        this.http.get('https://stats.naminilamy.fr/' + this.route.snapshot.paramMap.get('statistiqueId'))
          .toPromise()
          .then((data: any) => {
            let index = this.StatsArray.findIndex(stat => stat.id === this.route.snapshot.paramMap.get('statistiqueId'));
            let edit = this.StatsArray[index];
            this.id = edit.id;
            this.value = edit.value;
            this.title = edit.title;
            this.appreciation = edit.appreciation;
          });
    }
  }

  AddEdit() {
    if (this.status === 'create') {
      this.submit();
    } else {
      this.update(this.route.snapshot.paramMap.get('statistiqueId'));
    }
  }

  submit() {
    this.http.post('https://stats.naminilamy.fr/', {
      id: this.id,
      value: this.value,
      title: this.title,
      appreciation: this.appreciation
    })
      .subscribe((data: any) => {
        this.StatsArray.push(new Statistique(data.id, data.value, data.title, data.appreciation));
      });
  }


  update(id: any) {


    this.http.put('https://stats.naminilamy.fr/' + id, {
      id: this.id,
      value: this.value,
      title: this.title,
      appreciation: this.appreciation,
    })
      .subscribe((data: any) => {
        let index = this.StatsArray.findIndex(stat => stat.id === id);
        this.StatsArray[index] = new Statistique(data.id, data.title, data.value, data.appreciation);
      });

  }

}


