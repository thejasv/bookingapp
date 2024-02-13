import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Airline } from 'src/models/airline';
import { FlightService } from 'src/services/flight.service';

@Component({
  selector: 'app-addairline',
  templateUrl: './addairline.component.html',
  styleUrls: ['./addairline.component.css']
})
export class AddairlineComponent implements OnInit {

  airline:Airline={id:0,airlineName:null,isactive:null}
  invalid:boolean=false;
  constructor(private router:Router,private flightservice:FlightService) { }

  ngOnInit(): void {
  }
  onSubmit(airlines:any)
  {
    console.log(airlines);
    this.airline.airlineName=airlines.airlineName;
    if(airlines.isactive=="true")
    {
      this.airline.isactive=true;
    }
    else
    {
      this.airline.isactive=false;
    }
    this.flightservice.addAirline(airlines).subscribe();
    alert("Successfully added airline");
    this.router.navigateByUrl("/adminhomepage");
  }
}
