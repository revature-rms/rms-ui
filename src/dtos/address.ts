export class Address {
    unitStreet: string;
    city: string;
    state: string;
    zip: number;
    country: string;

    constructor(unitStreet: string, city: string, state: string, zip: number, country: string) {
        this.unitStreet = unitStreet;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.country = country;
    }
}
