import { ResourceMetadata } from "./resourceMetadata";
import { Employee } from "./employee";


export class TableEmployee {
    id: number;
    firstName: string;
    lastName: string;
    fullName: string;
    email: string;
    title: string;
    department: string;
    resourceMetaData: ResourceMetadata;

    constructor(employee: Employee) {
        this.id = employee.id;
        this.firstName = employee.firstName;
        this.lastName = employee.lastName;
        this.email = employee.email;
        this.title = employee.title;
        this.department = employee.department;
        this.resourceMetaData = employee.resourceMetaData;
        this.fullName = employee.firstName + ' ' + employee.lastName;
    }
}