export class BookedTicket
{
    constructor
    (
        public pnr:string,
        public email:string,
        public flightNumber:string,
        public flightName:string,
        public departure:string,
        public destination:string,
        public departureDate:any,
        public numberOfTickets:number,
        public ticketCost:number,
    )
    {

    }
}