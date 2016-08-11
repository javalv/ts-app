import {Component} from '@angular/core';
import {heroServiceProvider, HeroService} from "./HeroService";
@Component({
  selector: 'injectable-test',
  template: ``,
  providers: [heroServiceProvider],
})
export class InjectableTest {

    constructor(heroService:HeroService){
      console.log(this.heroService.getName());
    }



}
