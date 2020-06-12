import { AppUser } from "./appUser";

export class ResourceMetadata {
    resourceCreator: AppUser;
    resourceCreationTime: Date;
    lastModifier: AppUser;
    lastModifiedDateTime: Date;
    resourceOwner: AppUser;

    constructor(resourceCreator: AppUser, resourceCreationTime: Date, lastModifier: AppUser, lastModifiedDateTime: Date, resourceOwner: AppUser) {
        this.resourceCreator = resourceCreator;
        this.resourceCreationTime = resourceCreationTime;
        this.lastModifier = lastModifier;
        this.lastModifiedDateTime = lastModifiedDateTime;
        this.resourceOwner = resourceOwner;
    }
}