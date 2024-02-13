import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Logincredentials } from 'src/models/logincredentials';
import { User } from 'src/models/user';
import { AuthService } from 'src/services/auth.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild(NgForm) loginForm:NgForm;
  invalid:boolean=false;
  logincredential:Logincredentials={email:null,password:null,admin:false}

  constructor(private authService:AuthService,private router:Router,private httpclient:HttpClient) { }

  ngOnInit(): void {
  }
  onSubmit(logincredential:Logincredentials)
  {
    this.authService.Login(logincredential).subscribe((success:any)=>{
      
      if (!success) {
        this.invalid = true;
        this.router.navigateByUrl("");
      }
      else
      {
        
        this.router.navigateByUrl("/userhomepage");
      }
    });
    
  }
}
