import React, { useEffect, useState, useReducer } from 'react'

const CourseIconAndText = (props) => {
    return (
        <div className="courseIconAndText container">
            <img className="courseImg" src={props.imgSrc} alt="courseIcon" />
            <p className="courseText grey">{props.text}</p>
        </div>
    )
}

export default CourseIconAndText