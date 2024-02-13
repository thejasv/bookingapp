import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { cancelSingleTicket } from 'src/models/cancelticket';
import { PassengerDTO } from 'src/models/passengerDTO';
import { FlightbookingService } from 'src/services/flightbooking.service';

@Component({
  selector: 'app-viewpassengerdetails',
  templateUrl: './viewpassengerdetails.component.html',
  styleUrls: ['./viewpassengerdetails.component.css']
})
export class ViewpassengerdetailsComponent implements OnInit {
  pnr;
  dataloading:boolean=false;
  cancelticket:cancelSingleTicket={email:null,pnr:null};
  constructor(private flightbookingService:FlightbookingService,private route:ActivatedRoute,private router:Router) { }
  passengers:PassengerDTO[]=[];
  ngOnInit(): void {
    this.pnr=this.route.snapshot.params["pnr"];
    this.flightbookingService.GetPassengerDetails(this.pnr).subscribe((response:any)=>{this.passengers=response; this.dataloading=true})
  }
  cancelSingleTicket(pnr,email)
  {
    console.log(pnr);
    console.log(email);
    this.cancelticket.email=email;
    this.cancelticket.pnr=pnr;
    this.flightbookingService.cancelSingleTicket(this.cancelticket).subscribe(response=>{
      if(response)
      {
        alert("ticket cancelled successfully");
      }
      else
      {
        alert("Cannot Cancel the ticket when departure time is less than 24 hours.");
        this.router.navigateByUrl("/viewbookings");
      }
    });
  }

}
