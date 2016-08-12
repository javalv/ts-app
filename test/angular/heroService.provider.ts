import {UserService} from "./UserService";
import {HeroService} from "./HeroService";

let heroServiceFactory = (userService:UserService) => {
  return new HeroService(userService.getName());
};


export let heroServiceProvider =
{
  provide: HeroService,
  useFactory: heroServiceFactory,
  deps: [UserService]
};
