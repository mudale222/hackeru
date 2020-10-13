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
        <div className="sticky-top stickyNavbar">
            <nav className="navbar navbar-expand-lg  text-dark py-2 pt-3 stickyContainer" >

                <a href="/"><img itemProp="image" src="/logo.png" alt="תמונת לוגו של מכללת האקריו"  /></a>
               
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
                    aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation" id="nav-icon1"
                    onClick={() => {
                        let icon1 = document.getElementsByClassName("iconLine1")[0]
                        let icon2 = document.getElementsByClassName("iconLine2")[0]
                        let icon3 = document.getElementsByClassName("iconLine3")[0]

                        icon1.classList.toggle("icon1Open")
                        icon2.classList.toggle("d-none")
                        icon3.classList.toggle("icon3Open")
                    }}>
                    <span class="iconLine iconLine1"></span>
                    <span class="iconLine iconLine2"></span>
                    <span class="iconLine iconLine3"></span>
                </button>

                <div class="collapse navbar-collapse  justify-content-xl-center" id="navbarTogglerDemo01">
                    <ul class="navbar-nav  m-0 p-0 mt-2 mt-lg-0">
                        <DropDown data={btn1Props} />
                        <DropDown data={btn2Props} />
                        <DropDown data={btn3Props} />
                        <DropDown data={btn4Props} />
                        <DropDown data={btn5Props} />
                        <DropDown data={btn6Props} />
                        <a className="grey mr-2 d-none d-xl-block rentClassA" href="/">השכרת כיתות</a>
                        <div className="soliderTag d-none d-xl-block">
                            <label htmlFor="" className="soliderLabel">חייל משוחרר?</label>
                            <a href="" className="soliderHref">לחץ כאן</a>
                        </div>
                    </ul>
                </div>

            </nav >
        </div>
    )
}


export default StickyNavbar
