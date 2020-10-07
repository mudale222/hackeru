import React, { useEffect, useState, useReducer } from 'react'

const CourseIconAndText = (props) => {
    return (
        <div className="courseIconAndText container">
            <img className="courseImg" src={props.imgSrc} alt="courseIcon" />
            <div className="headerLabelContainer">
                {props.header ? <h5 className="display-5">{props.header}</h5> : ""}
                <label className="courseText grey">{props.text}</label>
            </div>
        </div>
    )
}

export default CourseIconAndText