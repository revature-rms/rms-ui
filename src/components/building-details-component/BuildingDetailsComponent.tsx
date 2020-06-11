import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Wrapper from '../../utils/div-wrapper/Wrapper';
import { Grid, FormControl, InputLabel, Input, Card, Button } from '@material-ui/core';
import { userInfo } from 'os';
import { userState } from '../../reducers/login-reducer';

export interface IBuildingDetailsProps {
    thisBuilding: any
}

function BuildingDetailsComponent(){

        const mockBuilding =  {id: 1, 
                            name: "Muma College of Business",
                            abbrName: "MCB",
                            physicalAddress: "456 N Main st",
                            trainingLead: "Bob",
                            ameneties: [{ type: "coffee",
                                        status: "low"
                                        },
                                        { type: "whiteboard",
                                        status: "clean"
                                        }],
                            room: [{ roomNumber: "2035",
                                    maxOccupancy: 30,
                                    isActive: false
                                    },
                                    {roomNumber: "1005",
                                    maxOccupancy: 15,
                                    isActive: true
                                    }],
                            resourceMetadata: {resourceCreator: "John",
                                                resourceCreationDateTime: "2020-03-03T13:22:31+00.00",
                                                lastModifer: "Jeremy",
                                                lastModifiedDateTime: "2020-03-05T10:21:35+00.00",
                                                resourceOwner: "Abe"

                                                }
        }

        const [editting, setEdditing] = useState(false);
        const [nameState, setName] = useState(mockBuilding.name);
        const [abbrNameState, setAbbrName] = useState(mockBuilding.abbrName);
        const [addressState, setAddress] = useState(mockBuilding.physicalAddress);
        const [bManagerState, setBManager] = useState(mockBuilding.trainingLead);
        const [building, setBuilding] = useState(mockBuilding)
           
        const enableEdit = () => {
            setEdditing(true);
        }   

        const save = () => {
            setBuilding({...mockBuilding,
                        name: nameState,
                        abbrName: abbrNameState,
                        physicalAddress: addressState,
                        trainingLead: bManagerState
                     })
        }

        const cancel = () => {
            setEdditing(false);
        }

        const setInfo = (event: any) => {
            switch(event.target.id){
                case "name":
                    setName(event.target.value);
                case "abbrName":
                    setAbbrName(event.target.value);
                case "address":
                    setAddress(event.target.value);
                case "bManager":
                    setBManager(event.target.value);
            }
        }
        
        
        return (
            <>
                {/* Wrapper component is imported from utils/div-wrapper */}
                <Wrapper data-test="main-content" title={"Campus Name Here"} elements={"Campus abbreviation here."}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Card className="full-card">
                            <div id="building-form">
                                <FormControl>
                                    <InputLabel>Building Name: </InputLabel>
                                    <Input id="name" value={building.name} disabled={!editting} onChange={setInfo} inputProps={{ 'aria-label': 'description' }} />
                                </FormControl>
                                <br/>
                                <FormControl>
                                    <InputLabel>Abbreviated Name: </InputLabel>
                                    <Input id="abbrName" value={building.abbrName} disabled={!editting} inputProps={{ 'aria-label': 'description' }} />
                                </FormControl>
                                <br/>
                                <FormControl>
                                    <InputLabel>Address: </InputLabel>
                                    <Input id="address" value={building.physicalAddress} disabled={!editting} inputProps={{ 'aria-label': 'description' }} />
                                </FormControl>
                                <br/>
                                <FormControl>
                                    <InputLabel>Building Manager: </InputLabel>
                                    <Input id="bManager" value={building.trainingLead} disabled={!editting} inputProps={{ 'aria-label': 'description' }} />
                                </FormControl>
                            </div>
                            <br/>
                            {editting?
                            <>
                            <FormControl>
                                <Button onClick={save}>Save</Button>
                                <Button onClick={cancel}>Cancel</Button>
                            </FormControl>
                            </>
                            :
                            <FormControl>
                                <Button onClick={enableEdit}>Edit</Button>
                            </FormControl>}

                            </Card>
                        </Grid>

                        <Grid item xs={8}>

                        </Grid>

                        <Grid item xs={4}>

                        </Grid>

                        <Grid item xs={12}>
                            
                        </Grid>

                    </Grid>
                </Wrapper>
            </>
        )
}

export default BuildingDetailsComponent;