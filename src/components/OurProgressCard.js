import React, { useEffect, useState, useReducer } from 'react'

const OurProgressCard = (props) => {
    return (
        <div className="ourProgressCard text-white text-center p-3" style={{ background: props.color }} >
            <div className="cardNumber mx-auto mb-3" style={{ color: props.color }}> {props.number}</div>
            <h5 className="display-4 cardHeader mb-2">{props.header}</h5>
            <div className="hrLine mb-2"></div>
            <label htmlFor="" className="cardText">{props.text}</label>
        </div>
    )
}

export default OurProgressCard