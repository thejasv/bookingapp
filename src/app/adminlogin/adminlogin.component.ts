import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Logincredentials } from 'src/models/logincredentials';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  invalid:boolean=false;
  logincredential:Logincredentials={email:null,password:null,admin:true}
  constructor(private router:Router,private httpclient:HttpClient,private AuthService:AuthService) { }

  ngOnInit(): void {
  }
  onSubmit(logincredential:Logincredentials)
  {
    this.AuthService.Login(logincredential).subscribe((success:any)=>{
      
      if (!success) {
        this.invalid = true;
        alert("Invalid Credentials");
        this.router.navigateByUrl("");
      }
      else
      {
        this.router.navigateByUrl("/adminhomepage");
      }
    });
  }
}
