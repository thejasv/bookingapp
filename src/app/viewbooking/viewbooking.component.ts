import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookTicket } from 'src/models/book';
import { FlightbookingService } from 'src/services/flightbooking.service';

@Component({
  selector: 'app-viewbooking',
  templateUrl: './viewbooking.component.html',
  styleUrls: ['./viewbooking.component.css']
})
export class ViewbookingComponent implements OnInit {

  dataloading:boolean=false;
  constructor(private flightbookingService:FlightbookingService,private route:Router) { }
  bookings:BookTicket[]=[];
  ngOnInit(): void {
  
    this.flightbookingService.GetBookingHistoryOfUser(sessionStorage.getItem("email")).subscribe((response:any)=>{this.bookings=response;this.dataloading=true;})
  }
  getPassengerDeatils(pnr)
  {
    this.route.navigate(["/viewpassengersdetails",pnr]);
  }
  cancelAllTickets(pnr)
  {
    this.flightbookingService.CancelAllTickets(pnr).subscribe((Response:any)=>{
      if(Response)
      {
        alert("tickets cancelled successfully");
        this.route.navigateByUrl("/userhomepage");
      }
      else
      {
        alert("Cannot Cancel the ticket when departure time is less than 24 hours.");
        this.route.navigateByUrl("/viewbookings");
      }
    });
    
  }
}
