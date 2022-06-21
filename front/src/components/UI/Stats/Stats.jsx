import React from 'react'
import s from './Stats.module.sass'

export default function Stats({children, text=''}) {
  return (
    <div className={s.stats}>
        <p className={s.main}>{children}</p>
        <p className={s.text}>{text}</p>
    </div>
  )
}
