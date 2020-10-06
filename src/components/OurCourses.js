import React, { useEffect, useState, useReducer } from 'react'
import CourseIconAndText from './CourseIconAndText'

const OurCourses = () => {
    return (
        <div className="ourCourses container-fluid py-5 whitish blackish">
            <div className="title container pb-3">
                <h3 className="display-4">הקורסים שלנו עכשיו גם אונליין</h3>
            </div>
            <div className="container coursesAndHearMore">
                <div className="row">
                    <div className="col col-lg-8">
                        <div className="row coursesMainRow pb-2">
                            <div className="col-6 col-sm-4 col-md-3 coursesRow1Col1">
                                <CourseIconAndText imgSrc="/courseIcon1.svg" text="קורס סייבר ואבטחת מידע Ethical Hacking" />
                            </div>
                            <div className="col-6 col-sm-4 col-md-3 coursesRow1Col2">
                                <CourseIconAndText imgSrc="/courseIcon2.svg" text="קורס עיצוב גרפי עם התמחות ב-UI/UX" />
                            </div>
                            <div className="col-6 col-sm-4 col-md-3 coursesRow1Col3">
                                <CourseIconAndText imgSrc="/courseIcon3.svg" text="קורס שיווק דיגיטלי - קורס קידום אתרים" />
                            </div>
                            <div className="col-6 col-sm-4 col-md-3 coursesRow1Col4">
                                <CourseIconAndText imgSrc="/courseIcon1.svg" text="קורס QA בודק תוכנה" />
                            </div>
                            {/* </div> */}
                            {/* <div className="row coursesRow2 pb-2"> */}
                            <div className="col-6 col-sm-4 col-md-3 coursesRow2Col1">
                                <CourseIconAndText imgSrc="/courseIcon2.svg" text="קורס סייבר ואבטחת מידע Ethical Hacking" />
                            </div>
                            <div className="col-6 col-sm-4 col-md-3 coursesRow2Col2">
                                <CourseIconAndText imgSrc="/courseIcon3.svg" text="קורס סייבר ואבטחת מידע Ethical Hacking" />
                            </div>
                            <div className="col-6 col-sm-4 col-md-3 coursesRow3Col3">
                                <CourseIconAndText imgSrc="/courseIcon1.svg" text="קורס סייבר ואבטחת מידע Ethical Hacking" />
                            </div>
                            <div className="col-6 col-sm-4 col-md-3 coursesRow4Col4">
                                <CourseIconAndText imgSrc="/courseIcon2.svg" text="קורס סייבר ואבטחת מידע Ethical Hacking" />
                            </div>
                            {/* </div> */}
                            {/* <div className="row coursesRow3 pb-2"> */}
                            <div className="col-6 col-sm-4 col-md-3 coursesRow3Col1">
                                <CourseIconAndText imgSrc="/courseIcon3.svg" text="קורס סייבר ואבטחת מידע Ethical Hacking" />
                            </div>
                            <div className="col-6 col-sm-4 col-md-3 coursesRow3Col2">
                                <CourseIconAndText imgSrc="/courseIcon2.svg" text="קורס סייבר ואבטחת מידע Ethical Hacking" />
                            </div>
                            <div className="col-6 col-sm-4 col-md-3 coursesRow3Col3">
                                <CourseIconAndText imgSrc="/courseIcon2.svg" text="קורס סייבר ואבטחת מידע Ethical Hacking" />
                            </div>
                            <div className="col-6 col-sm-4 col-md-3 coursesRow3Col4">
                                <CourseIconAndText imgSrc="/courseIcon3.svg" text="קורס סייבר ואבטחת מידע Ethical Hacking" />
                            </div>
                            {/* </div> */}
                            {/* <div className="row coursesRow4 pb-2"> */}
                            <div className="col-6 col-sm-4 col-md-3 coursesRow4Col1">
                                <CourseIconAndText imgSrc="/courseIcon1.svg" text="קורס סייבר ואבטחת מידע Ethical Hacking" />
                            </div>
                            <div className="col-6 col-sm-4 col-md-3 coursesRow4Col2">
                                <CourseIconAndText imgSrc="/courseIcon2.svg" text="קורס סייבר ואבטחת מידע Ethical Hacking" />
                            </div>
                            <div className="col-6 col-sm-4 col-md-3 coursesRow4Col3">
                                <CourseIconAndText imgSrc="/courseIcon3.svg" text="קורס סייבר ואבטחת מידע Ethical Hacking" />
                            </div>
                            <div className="col-6 col-sm-4 col-md-3 coursesRow4Col4">
                                <CourseIconAndText imgSrc="/courseIcon1.svg" text="קורס סייבר ואבטחת מידע Ethical Hacking" />
                            </div>
                            {/* </div> */}
                            {/* <div className="row coursesRow5"> */}
                            <div className="col-6 col-sm-4 col-md-3 coursesRow4Col1">
                                <CourseIconAndText imgSrc="/courseIcon1.svg" text="קורס QA בודק תוכנה" />
                            </div>
                        </div>
                    </div>
                    <div className="col-4 wantToHearMore d-none d-lg-block">
                        <p className="wantToHereMoreTitle text-white text-right mr-3">רוצה לשמוע עוד?</p>
                        <form action="submit">
                            <input type="text" id="name" name="name" placeholder="שם מלא | " />
                            <input type="text" id="telephone" name="telephone" placeholder="טלפון | " />
                            <input type="email" id="email" name="email" placeholder="אי-מייל | " />
                            <div className="check">
                                <input type="checkbox" id="aproveUpdates" />
                                <label className="aproveText text-white">אני מאשר קבלת עדכונים ומבצעים מהאקריו בכפוף לתקנון.</label>
                                <a href="" className="usersPolicy mt-4">מדיניות פרטיות משתמשים</a>
                            </div>
                            <button className="submit align-bottom">דברו איתי!</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurCourses