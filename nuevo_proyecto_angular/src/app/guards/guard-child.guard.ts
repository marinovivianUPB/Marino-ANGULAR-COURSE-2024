import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, GuardResult, MaybeAsync, RouterStateSnapshot} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class GuardChild implements CanActivateChild {
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    console.log("ACTIVATED ROUTE: ", childRoute)
    console.log("STATE: ", state)
    return true;
  }

}
