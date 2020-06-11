import React, { useEffect, useState } from 'react';
import Wrapper from '../../utils/div-wrapper/Wrapper';
import { Link } from "react-router-dom";
import {getAllCampusAPI} from '../../remote/campus'


export interface IBuildingListProps {
    
}

function BuildingListComponent() {

    //building array
    const[buildings, setBuildings] = useState([])

    //makes a request to the api and gets all campus data. Extracts building data to insert into local buildings state
    useEffect(() => {
        let campuses: Array<any> = [];
        let tempBuildings: Array<any> = [];

        const getCampuses = async() => {
            campuses = await getAllCampusAPI();
        }

        const getBuildings = async () => {
            await getCampuses();
            campuses.forEach(campus => tempBuildings.push(campus.buildings));
            //@ts-ignore
            setBuildings(tempBuildings)
        }

        getBuildings();
        

    }, [buildings]);
    

    render() {
        return (
            <>
                <Wrapper data-test="main-content" title={this.props.campuses ? this.props.campuses[0].name : "Campus Name Here"} elements={this.props.campuses ? this.subHeader()
                    : "Campus abbreviation here."}>
                    <div className="full-card">
                        <div className="tblbox">
                            <div className="tblhdr">Buildings in {this.props.campuses ? this.props.campuses[0].abbrName : "Building"}</div>
                            <table>
                                <tbody>
                                    <tr><td><b>Building Name:</b></td><td><b>Address:</b></td><td><b>Training Lead:</b></td></tr>
                                    {this.props.campuses ? this.mapBuildings() : <tr><td>No data available</td><td>No data available</td><td>No data available</td><td>No data available</td></tr>}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Wrapper>
            </>
        )
    }
}