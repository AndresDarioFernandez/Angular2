import { Component, ContentChildren, QueryList } from '@angular/core';
import { Hero } from './hero.directive';

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

  @ContentChildren(Hero)
  heroes: QueryList<Hero>;

  public classes(hero: Hero) {
      return {
          marvel:hero.marvel,
          hulk: hero.name === 'Hulk'
      };
  }
}
