import React from 'react';

const Wrapper = (props:any) => {
    return (
        <div data-test="main-content" className="section-box">
            <div className="section-hdr">
                <h1>{props.title}</h1>
                <div className="subnav">
                    {props.elements}
                </div>
            </div>

            {props.children}
            
        </div>
    )
}

export default Wrapper;