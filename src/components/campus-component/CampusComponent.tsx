import React from 'react'
import Wrapper from '../../utils/div-wrapper/Wrapper';
import { Card } from 'material-ui';
import CampusTable from '../../utils/campus-table/CampusDisplay';


interface ICampusProps {
    campuses: any,
    id: number,
    getAllCampuses: () => void
}

export class CampusComponent extends React.Component<ICampusProps, any> {
    constructor(props: any) {
        super(props)
    }

    //get campuses when the component mount
    componentDidMount = () => {
        if (this.props.campuses === null) {
            this.props.getAllCampuses();
        }
    }




    render() {
        return (
            <Wrapper title="Campuses">
                <Card className="full-card">

                    <br /> <br />
                    <div className="tblbox">
                        <div className="tblhdr">
                            Campuses
                    </div>
                        <CampusTable campuses = {this.props.campuses} title="Campuses" />

                    </div>
                    <br />
                </Card>
            </Wrapper>
        )
    }
}