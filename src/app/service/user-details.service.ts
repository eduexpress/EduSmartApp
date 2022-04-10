import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserDetailsDTO} from "../model/UserDetailsDTO";

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor(private http:HttpClient) { }

  public signUp(dto:UserDetailsDTO):Observable<any>{
    return this.http.post('http://127.0.0.1:3000/api/v1/user/sign-up',{
      email: dto.email,
      password: dto.password,
      fullName: dto.fullName,
      avatar: dto.avatar,
      redDate: dto.registerDate,
      activeState: true
    });
  }
}
