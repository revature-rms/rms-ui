import React from 'react'
import Wrapper from '../../utils/div-wrapper/Wrapper';
import { Card } from 'material-ui';


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
                        
                    </div>
                    <br />
                </Card>
            </Wrapper>
        )
    }
}