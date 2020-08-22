import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ServicesService } from './services.service';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class BeforeLoginService implements CanActivate {

  constructor(private Token:TokenService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    return !this.Token.loggedIn();
  }
}
