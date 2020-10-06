import React, { useEffect, useState, useReducer } from 'react'

const DropDown = (props) => {
    console.log(props)
    return (
        <div class="dropdown mr-2 d-none d-xl-block">
            <button class="btn grey dropdown-toggle p-0" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {props.data.title}
            </button>
            <div class="dropdown-menu purplish dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                {props.data.list.map(listName => {
                    return <a class="dropdown-item dropdownText" href="#">{listName}</a>
                })}
                {/* <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a> */}
            </div>
        </div>
    )
}

export default DropDown