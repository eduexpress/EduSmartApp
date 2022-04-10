import { Injectable } from '@angular/core';
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class LocalDataService {

  constructor(private cookieService: CookieService) { }

  public setCookie(key:string, data: any){
    this.cookieService.set(key,data,{
      domain:'localhost:4200/login',
      expires:31
    });
  }

}
