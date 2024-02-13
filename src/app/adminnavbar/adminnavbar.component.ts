import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminnavbar',
  templateUrl: './adminnavbar.component.html',
  styleUrls: ['./adminnavbar.component.css']
})
export class AdminnavbarComponent implements OnInit {

  constructor(private router:Router,private httpclient:HttpClient) { }

  ngOnInit(): void {
  }
  onLogout()
  {
    sessionStorage.clear();
    this.router.navigateByUrl('');
  }
}
