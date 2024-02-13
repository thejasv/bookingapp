import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Flight } from 'src/models/flight';
import { FlightService } from 'src/services/flight.service';

@Component({
  selector: 'app-viewflights',
  templateUrl: './viewflights.component.html',
  styleUrls: ['./viewflights.component.css']
})
export class ViewflightsComponent implements OnInit {
  id;
  flights:Flight[];
  constructor(private route:ActivatedRoute,private flightService:FlightService,private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.flightService.GetAllFlightByAirlineId(this.id).subscribe((response:any)=>{this.flights=response;});
  }
  redirectToEditPage(flightNumber)
  {
    console.log(flightNumber);
    this.router.navigate(["/editflight",flightNumber]);
  }
  


}
