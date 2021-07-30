export class Statistique {
  public id: string;
  public title: string;
  public value: string;
  public appreciation: string;

  constructor(id: string, title: string, value: string, appreciation: string) {
    this.id = id;
    this.title = title;
    this.value = value;
    this.appreciation = appreciation;
  }
}
