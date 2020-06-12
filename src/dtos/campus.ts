import { Address } from "./address";
import { Employee } from "./employee";
import { Building } from "./building";
import { ResourceMetadata } from "./resourceMetaData";

export class Campus {
    id: number;
    name: string;
    abbrName: string;
    shippingAddress: Address;
    trainingManager: Employee;
    stagingManager: Employee;
    hrLead: Employee;
    buildings: Building[];
    corporateEmployees: Employee[];
    resourceMetadata: ResourceMetadata;

    constructor(id: number, name: string, abbrName: string, shippingAddress: Address, trainingManager: Employee, stagingManager: Employee, hrLead: Employee, buildings: Building[], corporateEmployees: Employee[], resourceMetadata: ResourceMetadata) {
        this.id = id;
        this.name = name;
        this.abbrName = abbrName;
        this.shippingAddress = shippingAddress;
        this.trainingManager = trainingManager;
        this.stagingManager = stagingManager;
        this.hrLead = hrLead;
        this.buildings = buildings;
        this.corporateEmployees = corporateEmployees;
        this.resourceMetadata = resourceMetadata;
    }
}