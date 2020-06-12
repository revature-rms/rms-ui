import { Address } from "./address";
import { Employee } from "./employee";
import { Amenity } from "./amenity";
import { Room } from "./room";
import { ResourceMetadata } from "./resourceMetadata";

export class Building {
    id: number;
    name: string;
    abbrName: string;
    physicalAddress: Address;
    trainingLead: Employee;
    amenities: Amenity[];
    rooms: Room[];
    resourceMetadata: ResourceMetadata;

    constructor(id: number, name: string, abbrName: string, physicalAddress: Address, trainingLead: Employee, amenities: Amenity[], rooms: Room[], resourceMetadata: ResourceMetadata) {
        this.id = id;
        this.name = name;
        this.abbrName = abbrName;
        this.physicalAddress = physicalAddress;
        this.trainingLead = trainingLead;
        this.amenities = amenities;
        this.rooms = rooms;
        this.resourceMetadata = resourceMetadata;
    }
}