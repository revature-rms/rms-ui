import React from 'react';
import { filterFunction } from '../../utils/helper-functions/filterFunction';
import { allData } from '../../remote/allData';
import { Link } from "react-router-dom";

export class SearchComponent extends React.Component<any, any> {
    resources: any;
    constructor(props: any) {
        super(props);
        this.state = {
            resData: "",
            filtering: false
        }
    }


    async componentDidMount() {
        this.resources = await this.gatherData();
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
            return <div className="res" key={`${resource["firstName"]}${resource["lastName"]}${resource["id"]}`}>
                <Link to={`/employee/${resource["firstName"]}${resource["lastName"]}${resource["id"]}`}> {resource["firstName"]} {resource["lastName"]}</Link>
            </div>
        }
        else if(resource["amenities"] === undefined && resource["firstName"] === undefined){
            return <div className="res" key={`${resource["name"]}${resource["id"]}`} >
            <Link to={`/building/${resource["name"]}`}>{resource["name"]}</Link>
            </div>
        }
    }

    render() {
        return (
            <span 
            data-test="search-component"
            className="mainsearch">
                <b>Search resources: </b>
                <input
                    data-test="search-component-input"
                    onChange={this.onSearchChange}
                    placeholder="Search for resource"
                    id="search-box" type="text" />
                {
                    (this.state.resData.length > 0) ?
                        this.state.resData.map((resource: any) => {
                            return this.showResource(resource);
                        }) :
                                (this.state.filtering === true) ? <div data-test="search-display" className="res">No resource found!</div>
                                : <></>
                }
            </span>
        )
    }
}