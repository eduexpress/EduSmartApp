import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {LocalDataService} from "../service/local-data.service";

@Injectable({
  providedIn: 'root'
})
export class IsLoggedGuard implements CanActivate {
  constructor(private localDataService: LocalDataService, private router: Router) {
  }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.localDataService.isLogged().then(response => {// true
      return true;
    }).catch(error => {// false
      this.router.navigate(['/login']);
      return false;
    });
  }

}
