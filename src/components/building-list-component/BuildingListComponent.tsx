import React, { useEffect, useState } from 'react';
import Wrapper from '../../utils/div-wrapper/Wrapper';
import { Link } from "react-router-dom";
import {getAllCampusAPI} from '../../remote/campus'
import MaterialTable from 'material-table';


export interface IBuildingListProps {
    authUser: any
}

function BuildingListComponent() {

    //building array
    const[buildings, setBuildings] = useState([]);
    const[campus, setCampus] = useState(null);

    //makes a request to the api and gets all campus data. Extracts building data to insert into local buildings state
    useEffect(() => {
        let campuses: Array<any> = [];
        let tempBuildings: Array<any> = [];

        const getCampuses = async() => {
            //@ts-ignore
            campuses = await getAllCampusAPI();
        }

        const getBuildings = async () => {
            // await getCampuses();

            campuses = [{id: 1,
                name: "Campus A",
                abbrName: "CA",
                buildings: [{id: 1, 
                            name: "Muma College of Business",
                            physicalAddress: "456 N Main st",
                            trainingLead: "Bob"
                            },
                            {id: 2, 
                            name: "Benson Building",
                            physicalAddress: "2626 W State st",
                            trainingLead: "Bill"
                            }]
                        },
                        {id: 2,
                name: "Campus B",
                abbrName: "CB",
                buildings: [{id: 3, 
                            name: "Eyering Science Center",
                            physicalAddress: "333 N 750 W",
                            trainingLead: "Suzy"
                            },
                            {id: 4, 
                            name: "Wilkinson Student Center",
                            physicalAddress: "100 W 600 N",
                            trainingLead: "Sean"
                            }]

                        }]

            //logic for mock data            
            setCampus(campuses[1]) 
            //@ts-ignore
            campus.buildings.forEach(building => {
                tempBuildings.push(building)
            }) 
            
            //TODO logic with axios request
            // campuses.forEach(item => {

            //     if(item.resourceMetadata.resourceOwner.username === props.authUser.username){
            //         setCampus(item)
            //         
            //     } else {
            //         throw new Error ('409: You do not have proper credentials for this page')
            //     }
            //     campus.buildings.forEach(building => {
                //     tempBuildings.push(building)
                // })

            // })
            //@ts-ignore
            setBuildings(tempBuildings)
        }

        getBuildings();

    }, []);
    

    return (
        <>
            <Wrapper data-test="main-content" title={campus.name} elements={campus.abbrName}>
                <div className="full-card">
                    <div className="tblbox">
                        < MaterialTable
                            columns = {[
                                //@ts-ignore
                                { title: 'Name', field: 'name', render:rowData=><Link to={`/buildings/${rowData.id}`}>{rowData.name}</Link> },
                                { title: 'Address', field: 'physicalAddress'},
                                { title: "Building Manager", field: "trainingLead"}                                
                            ]}
                            data = {buildings}
                            title = "Buildings"
                            
                        />
                    </div>
                </div>
            </Wrapper>
        </>
    )

}

export default BuildingListComponent