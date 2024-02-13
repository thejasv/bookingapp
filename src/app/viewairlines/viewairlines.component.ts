import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Airline } from 'src/models/airline';
import { FlightService } from 'src/services/flight.service';

@Component({
  selector: 'app-viewairlines',
  templateUrl: './viewairlines.component.html',
  styleUrls: ['./viewairlines.component.css']
})
export class ViewairlinesComponent implements OnInit {
  airlines:Airline[];
  constructor(private flightService:FlightService,private route:Router) { }

  ngOnInit(): void {
    this.flightService.GetAllAirlines().subscribe((response:any)=>{this.airlines=response;console.log(response)});
  }
  
  onAddFlight(id)
  {
    this.route.navigate(["/addflightpage",id]);
  }
  onActivateAirline(id)
  {
    this.flightService.ActivateAirline(id).subscribe();
    alert("Airline Activated successfully");
    this.route.navigateByUrl("/adminhomepage");
  }
  onDeActivateAirline(id)
  {
    this.flightService.DeActivateAirline(id).subscribe();
    alert("Airline DeActivated successfully");
    this.route.navigateByUrl("/adminhomepage");
  }
  onGetAllFlights(id)
  {
    this.route.navigate(["/viewflights",id]);

  }

}
