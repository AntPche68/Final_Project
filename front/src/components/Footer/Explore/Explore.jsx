import React from 'react'
import EllipsisElem from '../../UI/EllipsisElem/EllipsisElem'
import s from './Explore.module.sass'

export default function Explore() {
  return (
    <div className={s.main}> Explore
        <EllipsisElem text='Home' />
        <EllipsisElem text='About' />
        <EllipsisElem text='Articles' />
        <EllipsisElem text='Our Store' />
        <EllipsisElem text='Contact Us' />
    </div>
  )
}
