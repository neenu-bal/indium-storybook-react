import React from "react";
import './ParaOne.css';

const ParaOne = (props) => {
    return (
        <div className="container">
            <div className="header">
                <h2 className="heading">{props.heading1}</h2>
                <p className="sub-heading">{props.subHeading}</p>
            </div>
            <div className="row-box">
                <div className="head-box">
                    <div>{props.boxVal1}</div>
                    <div>{props.boxVal2}</div>
                    <div>{props.boxVal3}</div>
                </div>
                <div>
                    <p>{props.content}</p>
                </div>
            </div>
        </div>
    )
}

export default ParaOne;