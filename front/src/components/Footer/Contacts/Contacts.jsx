import React from 'react'
import s from './Contacts.module.sass'

export default function Contacts() {
  return (
    <div className={s.main}>
        <p> Keep in Touch</p>
        <div className={s.contacts}>
            <div>Address:</div>
            <p>24A Kingston St, Los Vegas
                NC 28202, USA.                
            </p>
            <div> Mail: </div>
            <p> support@pages.com </p>
            <div> Phone: </div>
            <p> (+22) 123 - 4567 - 900 </p>
        </div>
    </div>
  )
}
