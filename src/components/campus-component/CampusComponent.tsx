import React from 'react'
import Wrapper from '../../utils/div-wrapper/Wrapper';


interface ICampusProps {
    campuses: any,
    getAllCampuses:() => void
}

export class CampusComponent extends React.Component<ICampusProps, any> {
    constructor(props:any){
        super(props)
    }

    //get campuses when the component mount
    componentDidMount = () => {
        if(this.props.campuses === null){
            this.props.getAllCampuses();
        }
    }




    render(){
        return(
            <Wrapper title= "Campuses">

            </Wrapper>
        )
    }
}