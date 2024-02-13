import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookTicket } from 'src/models/book';
import { Passenger } from 'src/models/passengers';
import { SearchSeats } from 'src/models/searchseats';
import { FlightService } from 'src/services/flight.service';
import { FlightbookingService } from 'src/services/flightbooking.service';


@Component({
  selector: 'app-bookflight',
  templateUrl: './bookflight.component.html',
  styleUrls: ['./bookflight.component.css']
})
export class BookflightComponent implements OnInit {
  flight;
  departureDate;
  passenger=new Passenger();
  Passengers:Passenger[]=[];
  searchseats:SearchSeats=new SearchSeats();
  seats;
  book:BookTicket={email:null,flightNumber:null,flightName:null,departure:null,destination:null,departureDate:null,numberOfTickets:null,ticketCost:null,passengers:[]};
  constructor(private route:ActivatedRoute,private router:Router,private flightService:FlightService,private flightBookingService:FlightbookingService) 
  {
    this.book.flightNumber=this.route.snapshot.params['flightNumber'];
      this.departureDate=this.route.snapshot.params['departureDate'];
      this.searchseats.departureDate=this.route.snapshot.params['departureDate'];
      console.log(this.searchseats.departureDate);
      this.searchseats.flightNumber=this.book.flightNumber;
   }

  ngOnInit(): void {
    this.flightService.GetFlightByFlightNumber(this.book.flightNumber).subscribe((Response:any)=>{
      this.flight=Response; 
      //console.log(this.flight);
      this.book.departure=this.flight.departure;
      this.book.destination=this.flight.destination;
      this.book.flightName=this.flight.flightName;
      //console.log(this.book.flightName);
      this.book.email=sessionStorage.getItem("email"); });
      this.flightService.GetAvailableSeats(this.searchseats).subscribe((Response:any)=>{this.seats=Response;console.log(Response);});
      this.passenger=new Passenger();
      this.Passengers.push(this.passenger);
      
  }
  onSubmit()
  {
    this.book.passengers=this.Passengers;
    this.book.numberOfTickets=this.Passengers.length;
    if(this.flight.departureTime.minutes==0)
    this.flight.departureTime.minutes="00";
    if(this.flight.departureTime.hours<10)
    this.flight.departureTime.hours="0"+this.flight.departureTime.hours;
    var time=(this.flight.departureTime.hours+":"+this.flight.departureTime.minutes).toString();
    this.book.departureDate=this.departureDate+"T"+time+":00";
    this.book.ticketCost=this.book.numberOfTickets*this.flight.ticketCost;
    console.log(this.book);
    this.flightBookingService.BookTickets(this.book).subscribe();
    alert("Tickets Booked Successfully");
    this.router.navigateByUrl("/userhomepage");
  }
  addpassenger()
  {
    if(this.Passengers.length<=4)
    {
      this.passenger=new Passenger();
      this.Passengers.push(this.passenger);
    }
    else
    {
      alert("Cannot add multiple passengers under single pnr");
    }
  }
  removePassenger(i)
  {
    this.Passengers.splice(i);
  }

}
