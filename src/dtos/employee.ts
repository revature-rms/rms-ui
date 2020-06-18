import { ResourceMetadata } from "./resourceMetadata";


export class Employee {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    title: string;
    department: string;
    resourceMetaData: ResourceMetadata;

    constructor(id: number, firstName: string, lastName: string, email: string, title: string, department: string, resourceMetaData: ResourceMetadata) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.title = title;
        this.department = department;
        this.resourceMetaData = resourceMetaData;
    }
}
