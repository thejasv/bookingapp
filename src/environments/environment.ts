// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  BookingURL:"https://thejasflightbooking.azurewebsites.net/api/v1.0/flight/",
  AuthURL:"https://thejasauthapi.azurewebsites.net/api/v1.0/flight/",
  FlightURL:"https://thejasflightapi.azurewebsites.net/api/v1.0/flight/"
  //AuthURL:"https://localhost:44300/api/v1.0/flight/",
  //FlightURL:"https://localhost:44301/api/v1.0/flight/",
  //BookingURL:"https://localhost:44302/api/v1.0/flight/"
  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
