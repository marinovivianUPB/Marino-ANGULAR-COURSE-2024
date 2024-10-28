import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChildFn, CanDeactivate, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';

/*export const guardFormGuard: CanActivateChildFn = (childRoute, state) => {
  return true;
};*/

@Injectable({
  providedIn: 'root'
})

export class GuardForm implements CanDeactivate<any>{
  canDeactivate(component: any, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): MaybeAsync<GuardResult> {
    console.log("CURRENT ROUTE: ", currentRoute)
    console.log("STATE: ", currentState)
    console.log("NEXT STATE: ", nextState)
    console.log("COMPONENT: ", component)

    return confirm("Are you sure you want to leave?")
  }
  
}