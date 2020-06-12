import { Employee } from "./employee";

export class RoomStatus {
    id: number;
    whiteboardCleaned: boolean;
    chairsOrdered: boolean;
    desksCleaned: boolean;
    submittedDateTime: Date;
    submitter: Employee;
    otherNotes: string;

    constructor(id: number, whiteboardCleaned: boolean, chairsOrdered: boolean, desksCleaned: boolean, submittedDateTime: Date, submitter: Employee, otherNotes: string) {
        this.id = id;
        this.whiteboardCleaned = whiteboardCleaned;
        this.chairsOrdered = chairsOrdered;
        this.desksCleaned = desksCleaned;
        this.submittedDateTime = submittedDateTime;
        this.submitter = submitter;
        this.otherNotes = otherNotes;
    }
}
