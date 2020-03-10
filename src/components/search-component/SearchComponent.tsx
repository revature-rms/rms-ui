import React from 'react';
import { filterFunction } from '../../utils/helper-functions/filterFunction';
import { allData } from '../../remote/allData';

export class SearchComponent extends React.Component<any, any> {
    resources: any;
    constructor(props: any) {
        super(props);
        this.state = {
            resData: "",
            filtering: false
        }
    }

    componentDidUpdate() {
        console.log(this.state.resData);
        // console.log(this.state.filtering);
    }

    async componentDidMount() {
        this.resources = await this.gatherData();
        // console.log(this.resources);
    }
    gatherData = async () => {
        let apiData = await allData();
        return apiData;
    }

    onSearchChange = (e: any) => {
        if(e.target.value.length > 0){
            this.setState({
                ...this.state,
                resData: filterFunction(this.resources, e.target.value),
                filtering: true
            })
        } 
        else if(e.target.value.length === 0) {
            this.setState({
                ...this.state,
                resData: "",
                filtering: false
            })
        }
    }

    showResource = (resource: any) => {
        if (resource["name"] === undefined) {
            // console.log("Employee")
            return <div className="res" key={`${resource["firstName"]}${resource["lastName"]}${resource["id"]}`}>
                {resource["firstName"]} {resource["lastName"]}
            </div>
        }
        else if (resource["firstName"] === undefined && resource["hrLead"] === undefined) {
            // console.log("Building")
            return <div className="res" key={`${resource["name"]}${resource["id"]}`} >
                {resource["name"]}
            </div>
        } 
        else if(resource["amenities"] === undefined && resource["firstName"] === undefined){
            // console.log("campus");
            return <div className="res" key={`${resource["name"]}${resource["id"]}`} >
                {resource["name"]}
            </div>
        }
    }

    render() {
        return (
            <span className="mainsearch">
                <b>Search resources: </b>
                <input
                    onChange={this.onSearchChange}
                    placeholder="Search for resource"
                    id="search-box" type="text" />
                {
                    (this.state.resData.length > 0) ?
                        this.state.resData.map((resource: any) => {
                            return this.showResource(resource);
                        }) :
                                (this.state.filtering === true) ? <div className="res">No resource found!</div>
                                : <></>
                }
            </span>
        )
    }
}