
import React, { useEffect, useState, useReducer } from 'react'

const TopNavbar = () => (
    <>
        <div className="TopNavbar text-white purplish d-none d-sm-block">
            <div className="topNavbarContainer  row justify-content-center">
             
                <a className="my-auto ml-2" href="">כניסת סטודנטים</a>
                <a className="my-auto ml-2" href=""> | בלוג</a>
                <a className="my-auto ml-2" href=""> | הטבות לסטודנטים </a>
                <a className="my-auto ml-2 d-none d-lg-block" href=""> | ייעוץ לימודים. 03-7207027</a>
                <a className="my-auto ml-2 d-none d-lg-block" href="">שירות לסטודנטים. 03-613-5565</a>
               
                <input className="mr-2 border-0 dark-purple py-3 d-none d-xl-block" type="search" placeholder="  חיפוש" aria-label="Search"></input>
                
                <button className="dark-purple border-0 d-none d-xl-block">
                    <div className="wl d-md-block"></div>
                    <i className="fa fa-search text-white ml-2 d-xl-inline"></i>
                </button>
                    
            </div>
        </div>
    </>
)



export default TopNavbar
