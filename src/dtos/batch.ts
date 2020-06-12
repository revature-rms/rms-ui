import { ResourceMetadata } from "./resourceMetaData";
import { Employee } from "./employee";

export class Batch {
    id: number;
    name: string;
    trainer: Employee;
    coTrainer: Employee;
    associates: Employee[];
    startDate: Date;
    endDate: Date;
    curriculum: string;
    resourceMetadata: ResourceMetadata;

    constructor(id: number, name: string, trainer: Employee, coTrainer: Employee, associates: Employee[], startDate: Date, endDate: Date, curriculum: string, resourceMetadata: ResourceMetadata) {
        this.id = id;
        this.name = name;
        this.trainer = trainer;
        this.coTrainer = coTrainer;
        this.associates = associates;
        this.startDate = startDate;
        this.endDate = endDate;
        this.curriculum = curriculum;
        this.resourceMetadata = resourceMetadata;
    }
}