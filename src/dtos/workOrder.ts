import { Employee } from "./employee";

export class WorkOrder {
    id: number;
    createdDateTime: Date;
    resolvedDateTime: Date;
    category: string;
    description: string;
    contactEmail: string;
    creator: Employee;
    resolver: Employee;

    constructor(id: number, createdDateTime: Date, resolvedDateTime: Date, category: string, description: string, contactEmail: string, creator: Employee, resolver: Employee) {
        this.id = id;
        this.createdDateTime = createdDateTime;
        this.resolvedDateTime = resolvedDateTime;
        this.category = category;
        this.description = description;
        this.contactEmail = contactEmail;
        this.creator = creator;
        this.resolver = resolver;
    }
}
