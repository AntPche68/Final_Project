import React from 'react'
import s from './WhatWillYouLearn.module.sass'
import img from '../../media/girlbook.png'

export default function WhatWillYouLearn() {
  return (
    <div className={s.main}>
        <div className={s.title}>
            <h2>What Will You Learn</h2>
        </div>
        <div className={s.section}>
            <div className={s.elements}>

            </div>
            <div className={s.image}>
                <img src={img} alt="Girl with the book" />
            </div>
        </div>    
    </div>
  )
}
