import React from 'react';

const Wrapper = (props:any) => {
    return (
        <div className="section-box">
            <div className="section-hdr">
                <h1>{props.title}</h1>
                <div className="subnav">
                    {props.elements}
                </div>
            </div>
            <br/>
            <br/>
            {props.children}
            
        </div>
    )
}

export default Wrapper;