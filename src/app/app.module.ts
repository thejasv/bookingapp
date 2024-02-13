import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient,HttpClientModule } from '@angular/common/http';
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { UserhomepageComponent } from './userhomepage/userhomepage.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminhomepageComponent } from './adminhomepage/adminhomepage.component';
import { AdminnavbarComponent } from './adminnavbar/adminnavbar.component';
import { UsernavbarComponent } from './usernavbar/usernavbar.component';
import { AddairlineComponent } from './addairline/addairline.component';
import { AddflightComponent } from './addflight/addflight.component';
import { EditflightComponent } from './editflight/editflight.component';
import { AuthGuard } from './auth.guard';
import { ViewairlinesComponent } from './viewairlines/viewairlines.component';
import { ViewflightsComponent } from './viewflights/viewflights.component';
import { DatePipe } from '@angular/common';
import { SearchflightComponent } from './searchflight/searchflight.component';
import { SearchFlight } from 'src/models/searchflight';
import { BookingComponent } from './booking/booking.component';
import { ViewbookingComponent } from './viewbooking/viewbooking.component';
import { ViewpassengerdetailsComponent } from './viewpassengerdetails/viewpassengerdetails.component';
import { SearchbookingComponent } from './searchbooking/searchbooking.component';
import { BookflightComponent } from './bookflight/bookflight.component';
const routes:Routes=[
  {path:'',component:LoginComponent},
  {path:'registeration-page',component:RegisterationComponent},
  {path:'userhomepage',component:UserhomepageComponent,canActivate:[AuthGuard]},
  {path:'adminloginpage',component:AdminloginComponent},
  {path:'adminhomepage',component:AdminhomepageComponent,canActivate:[AuthGuard]},
  {path:'addairlinepage',component:AddairlineComponent,canActivate:[AuthGuard]},
  {path:'addflightpage/:id',component:AddflightComponent,canActivate:[AuthGuard]},
  {path:'viewairlines',component:ViewairlinesComponent,canActivate:[AuthGuard]},
  {path:'viewflights/:id',component:ViewflightsComponent,canActivate:[AuthGuard]},
  {path:'editflight/:flightNumber',component:EditflightComponent,canActivate:[AuthGuard]},
  {path:'searchflight',component:SearchflightComponent,canActivate:[AuthGuard]},
  {path:'bookflight/:flightNumber/:departureDate',component:BookingComponent,canActivate:[AuthGuard]},
  {path:'viewbookings',component:ViewbookingComponent,canActivate:[AuthGuard]},
  {path:'viewpassengersdetails/:pnr',component:ViewpassengerdetailsComponent,canActivate:[AuthGuard]},
  {path:'searchbooking',component:SearchbookingComponent,canActivate:[AuthGuard]},
  {path:'book/:flightNumber/:departureDate',component:BookflightComponent,canActivate:[AuthGuard]}
  
]
@NgModule({
  declarations: [
    AppComponent,
    RegisterationComponent,
    LoginComponent,
    NavbarComponent,
    AdminloginComponent,
    AdminnavbarComponent,
    UsernavbarComponent,
    AdminhomepageComponent,
    UserhomepageComponent,
    AddairlineComponent,
    AddflightComponent,
    EditflightComponent,
    ViewairlinesComponent,
    ViewflightsComponent,
    SearchflightComponent,
    BookingComponent,
    ViewbookingComponent,
    ViewpassengerdetailsComponent,
    SearchbookingComponent,
    BookflightComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [AuthGuard,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
