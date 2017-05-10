export class Act {
    name: string;
    email: string;
    genre: string;
    city: string;
    state: string;
    actID: number;

    constructor(
    name: string,
    email: string,
    genre: string,
    city: string,
    state: string,
    actID: number) {
        this.name = name;
        this.email = email;
        this.genre = genre;
        this.city = city;
        this.state = state;
        this.actID = actID;
    }
}