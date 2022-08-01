import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private router : Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const hasAccess = window.sessionStorage.getItem("access-token") ? true : false;
    console.log("in login.guard. HasAccess is ", hasAccess)
      if(!hasAccess) {
          this.router.navigateByUrl("/home")
      }
      return hasAccess
  }
  
}
