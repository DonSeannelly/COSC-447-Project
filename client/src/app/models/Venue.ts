export class Venue {
  constructor(venueID: number, pointOfContact: string, capacity: number, name: string, city: string, state: string, street: string, zip: number, type: string, timeOpen: Date, timeClose: Date) {
    this.venueID = venueID;
    this.pointOfContact = pointOfContact;
    this.capacity = capacity;
    this.name = name;
    this.city = city;
    this.state = state;
    this.street = street;
    this.zip = zip;
    this.type = type;
    this.timeOpen = timeOpen;
    this.timeClose = timeClose;
  }
    venueID: number;
    pointOfContact: string;
    capacity: number;
    name: string;
    city: string;
    state: string;
    street: string;
    zip: number;
    type: string;
    timeOpen: Date;
    timeClose: Date;
}
