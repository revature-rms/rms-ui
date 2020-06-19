
import { Address } from "./address";
import { Employee } from "./employee";
import { Building } from "./building";
import { ResourceMetadata } from "./resourceMetadata";

export class Campus {
    id: number;
    name: string;
    abbrName: string;
    shippingAddress: Address;
    trainingManagerId: number;
    stagingManagerId: number;
    hrLead: number;
    buildings: Building[];
    corporateEmployees: Employee[];
    resourceMetadata: ResourceMetadata;

    constructor(id: number, name: string, abbrName: string, shippingAddress: Address, trainingManagerId: number, stagingManagerId: number, hrLead: number, buildings: Building[], corporateEmployees: Employee[], resourceMetadata: ResourceMetadata) {
        this.id = id;
        this.name = name;
        this.abbrName = abbrName;
        this.shippingAddress = shippingAddress;
        this.trainingManagerId = trainingManagerId;
        this.stagingManagerId = stagingManagerId;
        this.hrLead = hrLead;
        this.buildings = buildings;
        this.corporateEmployees = corporateEmployees;
        this.resourceMetadata = resourceMetadata;
    }
}