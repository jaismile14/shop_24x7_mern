
import { Injectable } from '@angular/core'
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router'
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private _router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const hasAccess = window.sessionStorage.getItem("access-token") ? true : false;
    console.log("in login.guard. HasAccess is ", hasAccess)
      if(!hasAccess) {
          this._router.navigateByUrl("/home")
      }
      return hasAccess
  }

  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  //   if (this.isLoggedIn()) {
  //     return true
  //   } else {
  //     this._router.navigate(['/login'])
  //   }
  // }

  isLoggedIn(): boolean {
    let status = false
    if (localStorage.getItem('isLoggedIn') == 'true') {
      status = true
    } else {
      status = false
    }
    return status
  }

  isAdmin(): boolean{
    if (localStorage.getItem('isAdmin') == 'true'){
      return true;
    }else{
      return false;
    }
  }

  logout() {
    window.sessionStorage.removeItem("access-token");
    window.sessionStorage.removeItem("loginUserId");
    window.sessionStorage.removeItem("loginUserFirstName");
    window.sessionStorage.removeItem("loginUserLastName");
    window.sessionStorage.removeItem("loginUserEmail");
    window.sessionStorage.setItem('isLoggedIn','false');
    window.location.replace('/home');
  }
}
