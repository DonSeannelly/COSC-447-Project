export class Promoter {
  constructor(firstName: string, lastName: string, middleInitial: string, phone: string, organization: string, promoterID: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.middleInitial = middleInitial;
    this.phone = phone;
    this.organization = organization;
    this.promoterID = promoterID;
  }
    firstName: string;
    lastName: string;
    middleInitial: string;
    phone: string;
    organization: string;
    promoterID: number;
}
