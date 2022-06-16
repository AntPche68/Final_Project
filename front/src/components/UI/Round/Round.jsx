import React from 'react'
import s from './Round.module.sass'

export default function Round({children, text=''}) {
  return (
    <div className={s.round}>
        <p className={s.main}>{children}</p>
        <p className={s.text}>{text}</p>
    </div>
  )
}
