export class Equipment {
  constructor(condition: string, type: string, model: string, equipmentID: number, venueID: number) {
    this.condition = condition;
    this.type = type;
    this.model = model;
    this.equipmentID = equipmentID;
    this.venueID = venueID;
  }
    condition: string;
    type: string;
    model: string;
    equipmentID: number;
    venueID: number;
}
