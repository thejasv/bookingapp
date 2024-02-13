import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookTicket } from 'src/models/book';
import { Passenger } from 'src/models/passengers';
import { FlightService } from 'src/services/flight.service';
import { FlightbookingService } from 'src/services/flightbooking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  flightNumber;
  flight;
  totaltickets:Number[]=[];
  invalidtable:boolean=false;
  departureDate:string;
  book:BookTicket={email:null,flightNumber:null,flightName:null,departure:null,destination:null,departureDate:null,numberOfTickets:null,ticketCost:null,passengers:[]};
  passengers:Passenger[]=[];
  constructor(private route:ActivatedRoute,private flightService:FlightService,private router:Router,private flightBookingService:FlightbookingService) {
      this.flightNumber=this.route.snapshot.params['flightNumber'];
      this.departureDate=this.route.snapshot.params['departureDate'];
      console.log(this.departureDate);
   }

  ngOnInit(): void {
    this.flightService.GetFlightByFlightNumber(this.flightNumber).subscribe((Response:any)=>{this.flight=Response; console.log(this.flight);this.book.flightNumber=this.flightNumber;
      this.book.departure=this.flight.departure;
      this.book.destination=this.flight.destination;
      this.book.flightName=this.flight.flightName;
      console.log(this.book.flightName);
      this.book.email=sessionStorage.getItem("email"); });
    
  }
  onNumberofPassengers(event:Event)
  {
    //this.totaltickets.length=Number((<HTMLInputElement>event.target).value);
    for( let i=0;i<Number((<HTMLInputElement>event.target).value);i++)
    {
      this.totaltickets[i]=i;
      let p:Passenger={email:null,name:null,age:null,gender:null,seatNumber:null,meals:null,status:null}
      this.passengers.push(p);
    }
    console.log(this.totaltickets);
    this.book.numberOfTickets=this.totaltickets.length;
    this.invalidtable=true;
  }
  onSubmit(passengers)
  {
    console.log(passengers);
    this.book.passengers=passengers;
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

}
