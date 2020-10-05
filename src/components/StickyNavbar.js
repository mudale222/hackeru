
import React, { useEffect, useState, useReducer } from 'react'
import DropDown from "./DropDown"

const btn1Props = {title:"קורסים",list:["קורס","קורס שקר","קורס כזב","קורס","קורס שקר","קורס כזב"]}

const StickyNavbar = () => (
    <div className="StickyNavbar text-dark sticky-top">
        <div className="row container mx-auto align-items-end">
            <img itemprop="image" src="/logo.png" alt="תמונת לוגו של מכללת האקריו" />
           <DropDown data={btn1Props}/>
            {/* <a className="my-auto ml-2" href="">כניסת סטודנטים</a>
            <a className="my-auto ml-2" href=""> | בלוג</a>
            <a className="my-auto ml-2" href=""> | הטבות לסטודנטים </a>
            <a className="my-auto ml-2 d-none d-lg-block" href=""> | ייעוץ לימודים. 03-7207027</a>
            <a className="my-auto ml-5 d-none d-lg-block" href="">שירות לסטודנטים. 03-613-5565</a>
            <input className="mr-2 border-0 dark-purple py-3 d-none d-lg-block" type="search" placeholder="  חיפוש" aria-label="Search"></input>
            <button className="dark-purple border-0 d-none d-lg-block">
                <div class="wl d-md-block"></div>
                <i class="fa fa-search text-white ml-2 d-lg-inline"></i>
            </button> */}
        </div>
    </div>
)



export default StickyNavbar
