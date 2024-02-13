import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookedTicket } from 'src/models/bookedTicket';
import { SearchByPnr } from 'src/models/searchbypnr';
import { PassengerDTO } from 'src/models/passengerDTO';
import { Passenger } from 'src/models/passengers';
import  jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { FlightbookingService } from 'src/services/flightbooking.service';
import { FlightService } from 'src/services/flight.service';

@Component({
  selector: 'app-searchbooking',
  templateUrl: './searchbooking.component.html',
  styleUrls: ['./searchbooking.component.css']
})
export class SearchbookingComponent implements OnInit {
  Pnr:SearchByPnr={pnr:null};
  invalid:boolean=false;
  booking:BookedTicket=null;
  passengers:Passenger[]=[];
  printbutton:boolean=true;

  constructor(private router:ActivatedRoute,private route:Router,private flightBookingService:FlightbookingService) { }

  ngOnInit(): void {
  }
  onSubmit(pnr)
  {
    console.log(pnr.pnr);
    this.flightBookingService.GetBookingDetailsByPNR(pnr.pnr).subscribe((response:any)=>
    {
      this.booking=response; 
      
    });
    this.flightBookingService.GetPassengerDetails(pnr.pnr).subscribe((response:any)=>
    {
      this.passengers=response;
    });
    this.invalid=true;
    this.printbutton=false;
  }
  public captureScreen()
  {
    var data = document.getElementById('ticketcard');
    html2canvas(data).then(canvas => {
    // Few necessary setting options
    var imgWidth = 208;
    var pageHeight = 295;
    var imgHeight = canvas.height * imgWidth / canvas.width;
    var heightLeft = imgHeight;
    
    const contentDataURL = canvas.toDataURL('image/png')
    let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
    var position = 0;
    pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
    pdf.save('ticket.pdf'); // Generated PDF
    });
  }
}
