import {Component, Injector} from '@angular/core';
import {HeroService} from "./HeroService";
import {heroServiceProvider} from "./heroService.provider";
import {UserService} from "./UserService";

@Component({
  selector: 'injectable-test',
  template: ``,
  providers: [heroServiceProvider,UserService],
})
export class InjectableTest {

  heroService:HeroService = this.injector.get(HeroService);

  constructor(private injector:Injector) {
    console.log(this.heroService.getName());
  }


}
