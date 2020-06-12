export class Address {
    unit_street: string;
    city: string;
    state: string;
    zip: number;
    country: string;

    constructor(unit_street: string, city: string, state: string, zip: number, country: string) {
        this.unit_street = unit_street;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.country = country;
    }
}