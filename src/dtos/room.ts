import { RoomStatus } from "./roomStatus";
import { Batch } from "./batch";
import { WorkOrder } from "./workOrder";
import { ResourceMetadata } from "./resourceMetaData";

export class Room {
    id: number;
    roomNumber: number;
    maxOccupancy: number;
    isActive: boolean;
    currentStatus: RoomStatus;
    batch: Batch;
    workOrders: WorkOrder[];
    resourceMetadata: ResourceMetadata;

    constructor(id: number, roomNumber: number, maxOccupancy: number, isActive: boolean, currentStatus: RoomStatus, batch: Batch, workOrders: WorkOrder[], resourceMetadata: ResourceMetadata) {
        this.id = id;
        this.roomNumber = roomNumber;
        this.maxOccupancy = maxOccupancy;
        this.isActive = isActive;
        this.currentStatus = currentStatus;
        this.batch = batch;
        this.workOrders = workOrders;
        this.resourceMetadata = resourceMetadata;
    }
}