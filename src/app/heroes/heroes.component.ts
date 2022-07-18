import { Component, OnInit } from '@angular/core';
import{Hero} from '../hero';
import{HEROES} from '../mock-heroes';
import{HeroService} from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
hero:Hero[]=[];
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  //   // date: 'March 15, 2018'
  //   ,
  //   date: ''
  // };
  heroes = HEROES;
  selectedHero?: Hero;

  constructor(private heroService: HeroService) {
    

   }
   getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }


  ngOnInit(): void {
    this.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
