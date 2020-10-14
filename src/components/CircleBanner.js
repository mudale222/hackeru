import React, { useEffect, useState, useReducer } from 'react'

const removeShadow = () => {
    document.styleSheets[2].removeRule(0)  /////////////////////////////pay attantion. Changing css order will mess it.
}
const hideCircle = () => {
    let element = document.getElementsByClassName("circleBanner")[0]
    if (element)
        element.classList.remove("d-lg-block")
}

const CircleBanner = () => {
    if (window.screen.width < 1200) {
        removeShadow()
        // document.getElementsByClassName("circleBanner")[0].classList.add("d-none")
    }

    return (
        <div className="d-none d-lg-block circleBanner circleAnim">

            <div className="closeCircle" onClick={() => {
                removeShadow()
                hideCircle()
            }}>X</div>

            <label htmlFor="" className="circleBannerTopHeader">עברנו ללימודי אונליין!</label>
            <label htmlFor="" className="circleBannerMiddleHeader">ללמוד הייטק ודיגיטל LIVE בזמן שנוח לך</label>
            <label htmlFor="" className="circleBannerBottomHeader">רוצה לשמוע עוד?</label>

            <form action="">
                <input type="text" name="circleFullName" id="circleFullName" className="circleFullName" placeholder="שם מלא" />
                <input type="tel" name="circleTelephone" id="circleTelephone" className="circleTelephone" placeholder="מספר טלפון" />
                <input type="email" name="circleEmail" id="circleEmail" className="circleEmail" placeholder="אי-מייל" />
                <div className="aprroveUpdates d-flex ">
                    <input type="checkbox" className="m-0" name="aprroveUpdatesInput" id="aprroveUpdatesInput" />
                    <label htmlFor="aprroveUpdates" className=" aprroveUpdatesLabel">אני מאשר קבלת עדכונים ומבצעים מהאקריו</label>
                </div>
                <button type="submit" className="circleBannerSubmitButton"><label htmlFor="" className="circleBannerSubmitButtonText"></label> לשיחת ייעוץ</button>

            </form>
        </div>
    )
}

export default CircleBanner