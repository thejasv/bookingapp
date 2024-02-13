import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Airline } from 'src/models/airline';
import { Flight } from 'src/models/flight';
import { FlightService } from 'src/services/flight.service';

@Component({
  selector: 'app-addflight',
  templateUrl: './addflight.component.html',
  styleUrls: ['./addflight.component.css']
})
export class AddflightComponent implements OnInit {

  flight:Flight={flightNumber:null, flightName:null,airlineId:null,scheduleDays:null,startDate:null,departure:null,endDate:null,numberOfBusinessClassSeats:null,numberOfEconomyClassSeats:null,ticketCost:null,destination:null,instrumentUsed:null,departureTime:null};
  id;
  airline:Airline;
  today=new Date();
  constructor(private flightService:FlightService,private router:ActivatedRoute,private route:Router) { }
  ngOnInit(): void {
    this.id=this.router.snapshot.params['id'];
    this.flightService.GetAirlineById(this.id).subscribe((Response:any)=>{this.airline=Response; console.log(this.airline);})
  }
  onSubmit(flight:Flight)
  {
    flight.airlineId=Number(this.id);
    flight.flightName=this.airline.airlineName;
    flight.scheduleDays=Number(flight.scheduleDays);
    this.flightService.AddFlight(flight).subscribe();
    alert("successfully flight added");
    this.route.navigateByUrl("/viewairlines");

  }
  
}
