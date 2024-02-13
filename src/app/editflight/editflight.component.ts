import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Flight } from 'src/models/flight';
import { FlightService } from 'src/services/flight.service';

@Component({
  selector: 'app-editflight',
  templateUrl: './editflight.component.html',
  styleUrls: ['./editflight.component.css']
})
export class EditflightComponent implements OnInit {
  flightNumber;
  startdate;
  enddate;
  flight:Flight={
                  flightNumber:null,
                  airlineId:null,
                  flightName:null,
                  departure:null,
                  destination:null,
                  startDate:null,
                  endDate:null,
                  scheduleDays:null,
                  ticketCost:null,
                  numberOfBusinessClassSeats:null,
                  numberOfEconomyClassSeats:null,
                  instrumentUsed:null,
                  departureTime:null
                };
  today=new Date();
              
  constructor(private route:ActivatedRoute,private router:Router,private flightService:FlightService, private datepipe:DatePipe) { }

  ngOnInit(): void {
    this.flightNumber=this.route.snapshot.params['flightNumber'];
    this.flightService.GetFlightByFlightNumber(this.flightNumber).subscribe((response:Flight)=>{this.flight=response;this.startdate=response.startDate.toString();this.flight.startDate=this.startdate.slice(0,10);
      this.enddate=response.endDate.toString();this.flight.endDate=this.enddate.slice(0,10);
      if(this.flight.departureTime.minutes==0)
      this.flight.departureTime.minutes="00";
      if(this.flight.departureTime.hours<10)
      this.flight.departureTime.hours="0"+this.flight.departureTime.hours;
      var time=(this.flight.departureTime.hours+":"+this.flight.departureTime.minutes).toString();
      this.flight.departureTime=time;
    })

  }
  onSubmit(flight)
  {
    console.log(flight);
    this.flightService.UpdateFlightDeatils(flight).subscribe();
    alert("updated flight details successfully");
    this.router.navigateByUrl("/adminhomepage");
  }
}
