import React, { useEffect, useState, useReducer } from 'react'
import OurProgressCard from './OurProgressCard.js'
const HowItsWork = () => {
    return (
        <div className="howItsWork my-5">
            <div className="howItsWorkContainer container blackish text-right">
                <h4 className="display-4 pb-2">איך זה עובד?</h4>
                <div className="row">
                    <div className="col-lg-4">
                        <label htmlFor="">HackerU מקיימת קשרי עבודה ענפים עם למעלה מ- 1400 חברות ברחבי הארץ ובעצם משמשת כקרש קפיצה לעולם ההייטק. חברות רבות כבר יודעות שב– HackerU הן יכולות למצוא כוח אדם מקצועי, מיומן ואיכותי בעל ידע פרקטי ויישומי לעבודה. ל-HackerU שיתופי פעולה ברחבי העולם, שם היא מלמדת את קורסי סייבר ואבטחת מידע ושיווק דיגיטלי באוניברסיטאות המובילות בארה"ב, הודו ואירופה.</label>
                    </div>
                    <div className="col-lg-4"><label htmlFor="">התהליך מתחיל מראיון טלפוני ופגישה אישית עם יועץ לימודים המכוון את המועמד לקורס המתאים לו ביותר וממשיך לשלב המיון שנע בין 20 ל-40 שעות בו ניתן להתנסות בתכנים השונים ולבדוק האם ישנה התאמה בין המועמד לבין מסלול הלימודים הנבחר. שלב המיון הינו ללא כל סיכון כספי מצד המועמד. במידה והמועמד אינו עובר את מבחן סיום שלב המיון או לחלופין מחליט כי התחום אינו מתאים לו והוא לא מעוניין להמשיך ללמוד - שכר הלימוד יוחזר לו במלואו.</label></div>
                    <div className="col-lg-4"><label htmlFor=""></label>במידה והמועמד עובר את שלב המיון בהצלחה ומעוניין להמשיך לקורס המלא, ייחתם מולו חוזה השמה ויקבל מלגת לימודים עד 7,000 ₪ תלוי במסלול אותו הוא מעוניין ללמוד. מטרתנו העיקרית היא להביא כמה שיותר בוגרים ישירות אל עולם ההייטק בעזרת סגל מרצים מהמוביל בתחום ומערך לימודים מקיף ומקצועי הנותן לכל סטודנט את ארגז הכלים הנחוץ לו לפרוץ לעולם ההייטק.</div>
                </div>

                <div className="ourProgressContainer d-none d-lg-block">
                    <h4 className="display-5 pb-2 font-weight-bold">התהליך שלנו</h4>
                    <div className="row">
                        <div className="col-lg-3 card1"><OurProgressCard color="#0798A8" number='1' header='פגישת ייעוץ' text='בפגישה נערך ראיון אישי עם המועמד, אנו בודקים את הרקע שלו ואת יכולת ההשתלבות שלו בתעשייה' /></div>
                        <div className="col-lg-3 card2"><OurProgressCard color="#39A4DC" number='2' header='קורס מיון' text='שלב זה אורך בין 40-20 שעות על מנת לבדוק את יכולות המועמד ללימודי המשך ולהשמה בעבודה. לא עברת את שלב המיון ? תקבל החזר כספי של שכר הלימוד ששילמת' /></div>
                        <div className="col-lg-3 card3"><OurProgressCard color="#154B9C" number='3' header='ללכת על בטוח' text='אחרי שעברת את שלב המיון בהצלחה ונשמת לרווחה, תקבל התחייבות חוזית לעבודה ומלגת לימודים עד 7,000 ₪ תלוי במסלול שבחרת' /></div>
                        <div className="col-lg-3 card4"><OurProgressCard color="#352F8A" number='4' header='מתחילים ללמוד' text='הלימודים אצלנו פרקטיים ומטרתם לשלב את הבוגרים שלנו בתעשייה, לצורך זה תוכנית הלימודים שלנו היא המקצועית והמקיפה ביותר ובזכותה אנחנו מספר אחת בהשמת בוגרים בהייטק' /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItsWork