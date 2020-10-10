
import React, { useEffect, useState, useReducer } from 'react'
import DropDown from "./DropDown"

const btn1Props = { title: "קורסים", list: ["2קורס שקר", "קורס כזב", "קורס", "קורס שקר2", "קור00ס כזב"] }
const btn2Props = { title: "אודות", list: ["2אודות שקר", "אודות כזב", "אודות", "אודות שקר2", "או0דות כזב"] }
const btn3Props = { title: "למה HackerU", list: ["2למה שקר", "למה כזב", "למה", "למה שקר2", "למ0ה כזב"] }
const btn4Props = { title: "השמה", list: ["2השמה שקר", "השמה כזב", "השמה", "השמה שקר2", "הש0מה כזב"] }
const btn5Props = { title: "מפות הגעה", list: ["2מפות שקר", "מפות כזב", "מפות", "מפות שקר2", "מפ0ות כזב"] }
const btn6Props = { title: "סיפורי הצלחה", list: ["2סיפורי שקר", "סיפורי כזב", "סיפורי", "סיפורי שקר2", "סי0פורי כזב"] }

const StickyNavbar = () => {
    return (
        <div className="sticky-top stickyNavbar text-dark sticky-top" >
            <div className="row stickyContainer container align-items-end justify-content-xl-center ">
                <img itemProp="image" src="/logo.png" alt="תמונת לוגו של מכללת האקריו" />
                <DropDown data={btn1Props} />
                <DropDown data={btn2Props} />
                <DropDown data={btn3Props} />
                <DropDown data={btn4Props} />
                <DropDown data={btn5Props} />
                <DropDown data={btn6Props} />
                <a className="grey mr-2 d-none d-xl-block" href="">השכרת כיתות</a>
                <div className="soliderTag d-none d-xl-block">
                    <label htmlFor="" className="soliderLabel">חייל משוחרר?</label>
                    <a href="" className="soliderHref">לחץ כאן</a>
                </div>
            </div>

        </div >
    )
}


export default StickyNavbar
