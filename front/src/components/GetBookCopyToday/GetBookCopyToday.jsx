import React from 'react'
import s from './GetBookCopyToday.module.sass'
import img from '../../media/getbook.png'


export default function GetBookCopyToday() {
  return (
    <div className={s.main}>
        <div className={s.text}>
            <h2>Get Book Copy Today!</h2>
            <p>We believe that bookstores are essential to a healthy culture. They’re where authors can connect with readers.</p>
        </div>
        <div className={s.image}>
            <img src={img} alt="Tea and book or flowers" />
        </div>
    </div>
  )
}
