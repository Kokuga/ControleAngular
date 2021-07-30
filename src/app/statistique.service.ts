import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Statistique} from 'src/models/statistique';


@Injectable({
  providedIn: 'root'
})
export class StatistiqueService {

  constructor(private http: HttpClient) {
  }

  getStatistiques(): Promise<Statistique[]> {
    return this.http.get<Statistique>('https://stats.naminilamy.fr')
      .toPromise()
      .then((data: any) => {
        let arrayStat: Statistique[] = [];
        for (let statistique of data) {
          arrayStat.push(new Statistique(statistique.id, statistique.title, statistique.value, statistique.createdAt));
        }
        return arrayStat;
      });
  }

}
