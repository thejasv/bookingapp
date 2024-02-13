import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usernavbar',
  templateUrl: './usernavbar.component.html',
  styleUrls: ['./usernavbar.component.css']
})
export class UsernavbarComponent implements OnInit {

  constructor(private router:Router,private httpclient:HttpClient) { }

  ngOnInit(): void {
  }
  onLogout()
  {
    sessionStorage.clear();
    this.router.navigateByUrl('');
  }
}
