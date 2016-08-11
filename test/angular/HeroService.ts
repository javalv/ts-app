import {Injectable} from "@angular/core";

@Injectable()
export class HeroService{
  constructor(
    private name: string) { }

  getName() {
    if(this.name){
      return this.name;
    }else{
      return null;
    }
  }
}

let heroServiceFactory = (name:string) => {
  return new HeroService(name);
};

export let heroServiceProvider =
{ provide: HeroService,
  useFactory: heroServiceFactory,
  // deps: [Logger, UserService]
};
