import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Flight } from 'src/models/flight';
import { SearchFlight } from 'src/models/searchflight';
import { FlightService } from 'src/services/flight.service';

@Component({
  selector: 'app-searchflight',
  templateUrl: './searchflight.component.html',
  styleUrls: ['./searchflight.component.css']
})
export class SearchflightComponent implements OnInit {
  Search:SearchFlight={departureDate:null,to:null,from:null}
  Flights:Flight[];
  invalid:boolean=false;
  today = new Date();
  constructor(private route:Router,private flightService:FlightService) { }

  ngOnInit(): void {
  }
  onSubmit(Search)
  {
    this.flightService.SearchFlight(Search).subscribe((Response:any)=>{this.Flights=Response; console.log(Response);});
    this.invalid=true;
  }
  onBook(flightNumber)
  {

    this.route.navigate(["/book",flightNumber,this.Search.departureDate]);
  }
  

}
