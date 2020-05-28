import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
private personArr: Person[] =[
  new Person("Sam","Football"),
  new Person("Joni","playing game")
];
  constructor() { }
  getPerson():Person[]{
    return this.personArr;
}

}
