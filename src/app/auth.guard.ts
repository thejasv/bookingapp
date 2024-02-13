import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authservice:AuthService,private route:Router)
  {

  }
  canActivate():boolean{
    if(this.authservice.loggedIn())
    {
      return true;
    }
    else
    {
      this.route.navigateByUrl("");
      return false;
    }
  }
  
}
