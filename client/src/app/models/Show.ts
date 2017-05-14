export class Show {
  constructor(date: Date, startTime: Date, endTime: Date, doorsTime: Date, expectedSales: number, showID: number, venueID: number, tourID: number) {
    this.date = date;
    this.startTime = startTime;
    this.endTime = endTime;
    this.doorsTime = doorsTime;
    this.expectedSales = expectedSales;
    this.showID = showID;
    this.venueID = venueID;
    this.tourID = tourID;
  }
    date: Date;
    startTime: Date;
    endTime: Date;
    doorsTime: Date;
    expectedSales: number;
    showID: number;
    venueID: number;
    tourID: number;
}
