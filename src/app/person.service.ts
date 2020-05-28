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
    this.delay(4000);
    return this.personArr;
}
async delay(ms: number) {
  await new Promise(resolve => setTimeout(()=>resolve(), ms));
 } 

}
