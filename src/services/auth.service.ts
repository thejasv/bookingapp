import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { User } from 'src/models/user';
import { catchError, mapTo, tap } from 'rxjs/operators';
import { Logincredentials } from 'src/models/logincredentials';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }
  Login(logincredential:Logincredentials)
  {
    
    return this.httpClient.post<any>(environment.AuthURL+"login",logincredential)
     .pipe
     (
      tap(response=>{ 
        console.log(response)
        this.SetCustomerId(response.emailId);
        this.setJwtToken(response.token);
      }),
      mapTo(true),
      catchError(error=>{ 
        return of(false);
      })
    );
  }
  SetCustomerId(emailId)
  {
    sessionStorage.setItem("email",emailId);
  }
  setJwtToken(token)
  {
    sessionStorage.setItem("token",token);
  }
  onCreate(User:User)
  {
    return this.httpClient.post(environment.AuthURL+"user/register",User).pipe(
      mapTo(true),
      catchError(error=>{return of(false);})
    );
  }
  loggedIn()
  {
    return !!sessionStorage.getItem("token");
  }
  
}
