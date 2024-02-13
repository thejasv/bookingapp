import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Airline } from 'src/models/airline';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private httpClient:HttpClient) { }
  addAirline(airline:Airline)
  {
    let httpHeaders=new HttpHeaders({'Authorization':'Bearer '+sessionStorage.getItem("token")});

    return this.httpClient.post(environment.FlightURL+"addAirline",airline,{headers:httpHeaders});
  }
  GetAllAirlines()
  {
    let httpHeaders=new HttpHeaders({'Authorization':'Bearer '+sessionStorage.getItem("token")});
    return this.httpClient.get(environment.FlightURL+"getAllAirline",{headers:httpHeaders});
  }
  GetAirlineById(id)
  {
    let httpHeaders=new HttpHeaders({'Authorization':'Bearer '+sessionStorage.getItem("token")});
    return this.httpClient.get(environment.FlightURL+"GetAirlineById/"+id,{headers:httpHeaders});
  }
  AddFlight(flight)
  {
    let httpHeaders=new HttpHeaders({'Authorization':'Bearer '+sessionStorage.getItem("token")});
    return this.httpClient.post(environment.FlightURL+"addFlight",flight,{headers:httpHeaders});
  }
  ActivateAirline(id)
  {
    let httpHeaders=new HttpHeaders({'Authorization':'Bearer '+sessionStorage.getItem("token")});
    return this.httpClient.post(environment.FlightURL+"activateAirline/"+id,null,{headers:httpHeaders});
  }
  DeActivateAirline(id)
  {
    let httpHeaders=new HttpHeaders({'Authorization':'Bearer '+sessionStorage.getItem("token")});
    return this.httpClient.post(environment.FlightURL+"blockAirline/"+id,null,{headers:httpHeaders});
  }
  GetAllFlightByAirlineId(id)
  {
    let httpHeaders=new HttpHeaders({'Authorization':'Bearer '+sessionStorage.getItem("token")});
    return this.httpClient.get(environment.FlightURL+"getAllFlightsByAirlineId/"+id,{headers:httpHeaders});
  }
  GetFlightByFlightNumber(flightNumber)
  {
    let httpHeaders=new HttpHeaders({'Authorization':'Bearer '+sessionStorage.getItem("token")});
    return this.httpClient.get(environment.FlightURL+"GetFlightByFlightNumber/"+flightNumber,{headers:httpHeaders});
  }
  UpdateFlightDeatils(flight)
  {
    let httpHeaders=new HttpHeaders({'Authorization':'Bearer '+sessionStorage.getItem("token")});
    return this.httpClient.put(environment.FlightURL+"UpdateFlightDetails",flight,{headers:httpHeaders});
  }
  SearchFlight(search)
  {
    return this.httpClient.post(environment.FlightURL+"searchFlight",search);
  }
  GetAvailableSeats(searchseats)
  {
    return this.httpClient.post(environment.FlightURL+"getAvailableTickets",searchseats);
  }
}
