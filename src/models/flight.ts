export class Flight
{
    constructor
    (
        public flightNumber:string,
        public flightName:string,
        public airlineId:number,
        public departure:string,
        public destination:string,
        public startDate:Date,
        public endDate:Date,
        public scheduleDays:number,
        public instrumentUsed:string,
        public numberOfBusinessClassSeats:number,
        public numberOfEconomyClassSeats:number,
        public ticketCost:number,
        public departureTime:any
    )
    {

    }
}