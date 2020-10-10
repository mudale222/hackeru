import React, { useEffect, useState, useReducer } from 'react'

const DropDown = (props) => {
    return (
        <div className="dropdown mr-2 d-none d-xl-block">
            <button className="btn grey dropdown-toggle p-0" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {props.data.title}
            </button>
            <div className="dropdown-menu purplish dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                {props.data.list.map(listName => {
                    return <a key={listName+props.data.title} className="dropdown-item dropdownText" href="#">{listName}</a>
                })}
            </div>
        </div>
    )
}

export default DropDown