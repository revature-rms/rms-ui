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
        console.log(this.state.filtering);
    }

    async componentDidMount() {
        this.resources = await this.gatherData();
        console.log(this.resources);
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
            console.log("Employee")
            return <h1 className="card" key={`${resource["firstName"]}${resource["lastName"]}${resource["id"]}`}>
                {resource["firstName"]} {resource["lastName"]}
            </h1>
        }
        else if (resource["firstName"] === undefined) {
            console.log("Building")
            return <h1 className="card" key={`${resource["name"]}${resource["id"]}`} >
                {resource["name"]}
            </h1>
        } 
    }

    render() {
        return (
            <div>
                <input
                    onChange={this.onSearchChange}
                    placeholder="Search for resource"
                    id="search-box" type="text" />
                {
                    (this.state.resData.length > 0) ?
                        this.state.resData.map((resource: any) => {
                            return this.showResource(resource);
                        }) :
                                (this.state.filtering === true) ? <h1>No resource found!</h1>
                                : <></>
                }
            </div>
        )
    }
}