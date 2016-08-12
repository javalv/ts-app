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


