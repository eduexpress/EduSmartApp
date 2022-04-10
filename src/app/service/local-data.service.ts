import { Injectable } from '@angular/core';
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class LocalDataService {

  constructor(private cookieService: CookieService) { }

  public setCookie(key:string, data: any){
    this.cookieService.set(key,data,{
      expires:31
    });
    this.getCookie(key);
  }

  public getCookie(key:string):any{
    console.log(this.cookieService.get(key));
    return this.cookieService.get(key);
  }

  public async isLogged():Promise<any>{
    return new Promise((resolve,reject)=>{
      if(this.getCookie('userToken')){
        resolve(true);
      }else{
        reject(false);
      }
    })
  }

}
