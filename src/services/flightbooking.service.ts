import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, pipe, throwError } from 'rxjs';
import {catchError,map,mapTo,tap} from 'rxjs/operators'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FlightbookingService {

  constructor(private httpClient:HttpClient) { }
  BookTickets(book)
  {
    let httpHeaders=new HttpHeaders({'Authorization':'Bearer '+sessionStorage.getItem("token")});
    return this.httpClient.post(environment.BookingURL+"bookTickets",book,{headers:httpHeaders});
  }
  GetBookingHistoryOfUser(email)
  {
    let httpHeaders=new HttpHeaders({'Authorization':'Bearer '+sessionStorage.getItem("token")});
    return this.httpClient.get(environment.BookingURL+"getBookingHistoryOfUser/"+email,{headers:httpHeaders});
  }
  GetPassengerDetails(pnr)
  {
    let httpHeaders=new HttpHeaders({'Authorization':'Bearer '+sessionStorage.getItem("token")});
    return this.httpClient.get(environment.BookingURL+"getTicketDetailsOnPNR/"+pnr,{headers:httpHeaders});
  }
  CancelAllTickets(pnr)
  {
    let httpHeaders=new HttpHeaders({'Authorization':'Bearer '+sessionStorage.getItem("token")});
    return this.httpClient.post(environment.BookingURL+"cancelAllTickets/"+pnr,null,{headers:httpHeaders}).pipe( mapTo(true),catchError(error=>{ return of(false);}));
  }
  GetBookingDetailsByPNR(pnr)
  {
    let httpHeaders=new HttpHeaders({'Authorization':'Bearer '+sessionStorage.getItem("token")});
    return this.httpClient.get(environment.BookingURL+"getBookingDetailsbyPnr/"+pnr,{headers:httpHeaders});
  }
  
  cancelSingleTicket(cancelticket)
  {
    let httpHeaders=new HttpHeaders({'Authorization':'Bearer '+sessionStorage.getItem("token")});
    return this.httpClient.post(environment.BookingURL+"cancelSingleTicket",cancelticket,{headers:httpHeaders}).pipe( mapTo(true),catchError(error=>{ return of(false);}));
  }
}
