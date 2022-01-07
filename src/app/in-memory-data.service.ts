import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Tim V.' },
      { id: 12, name: 'My Mommy' },
      { id: 13, name: 'JanMan' },
      { id: 14, name: 'Homer Simpson' },
      { id: 15, name: 'Bob Ross' },
      { id: 16, name: 'Philip J. Fry' },
      { id: 17, name: 'Donatello Turtle' },
      { id: 18, name: 'Philo Farnsworth' },
      { id: 19, name: 'Michael Faraday' },
      { id: 20, name: 'Scrooge McDuck' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
