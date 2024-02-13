import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/models/user';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {
  User:User={email:null,name:null,password:null,gender:null,age:null,mobile:null,admin:false};
  invalidemail:boolean=false;
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(User:User)
  {
    this.authService.onCreate(this.User).subscribe((response:any)=>{
      if(response)
      {
        alert("Registered Successfully");
        this.router.navigateByUrl(''); 
      }
      else
      {
          alert("User with " + User.email +" already exists.Please try with other email.")
      }
    });
    
    
  }
  

}
