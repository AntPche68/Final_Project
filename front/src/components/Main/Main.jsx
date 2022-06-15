import React from 'react'
import Nav from '../Nav/Nav'
import Title from '../Title/Title'
import s from './Main.module.sass'

export default function Main() {
  return (
    <div className={s.main}>
        <Nav />
        <Title />
    </div>
  )
}
