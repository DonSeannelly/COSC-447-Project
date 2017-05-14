export class Employee {
  constructor(position: string, phone: string, firstName: string, lastName: string, middleInitial: string, zip: string, state: string, city: string, street: string, employeeID: number) {
    this.position = position;
    this.phone = phone;
    this.firstName = firstName;
    this.lastName = lastName;
    this.middleInitial = middleInitial;
    this.zip = zip;
    this.state = state;
    this.city = city;
    this.street = street;
    this.employeeID = employeeID;
  }
    position: string;
    phone: string;
    firstName: string;
    lastName: string;
    middleInitial: string;
    zip: string;
    state: string;
    city: string;
    street: string;
    employeeID: number;

}
