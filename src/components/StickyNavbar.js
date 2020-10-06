
import React, { useEffect, useState, useReducer } from 'react'
import DropDown from "./DropDown"

const btn1Props = { title: "קורסים", list: ["קורס", "קורס שקר", "קורס כזב", "קורס", "קורס שקר", "קורס כזב"] }
const btn2Props = { title: "אודות", list: ["אודות", "אודות שקר", "אודות כזב", "אודות", "אודות שקר", "אודות כזב"] }
const btn3Props = { title: "למה HackerU", list: ["למה", "למה שקר", "למה כזב", "למה", "למה שקר", "למה כזב"] }
const btn4Props = { title: "השמה", list: ["השמה", "השמה שקר", "השמה כזב", "השמה", "השמה שקר", "השמה כזב"] }
const btn5Props = { title: "מפות הגעה", list: ["מפות", "מפות שקר", "מפות כזב", "מפות", "מפות שקר", "מפות כזב"] }
const btn6Props = { title: "סיפורי הצלחה", list: ["סיפורי", "סיפורי שקר", "סיפורי כזב", "סיפורי", "סיפורי שקר", "סיפורי כזב"] }

const StickyNavbar = () => {
    return (
        <div className="sticky-top stickyNavbar text-dark sticky-top" >
            <div className="row stickyContainer container align-items-end justify-content-xl-center ">
                <img itemprop="image" src="/logo.png" alt="תמונת לוגו של מכללת האקריו" />
                <DropDown data={btn1Props} />
                <DropDown data={btn2Props} />
                <DropDown data={btn3Props} />
                <DropDown data={btn4Props} />
                <DropDown data={btn5Props} />
                <DropDown data={btn6Props} />
                <a className="grey mr-2 d-none d-xl-block" href="">השכרת כיתות</a>
                <div className="soliderTag d-none d-xl-block">
                </div>
            </div>

        </div >
    )
}


export default StickyNavbar
