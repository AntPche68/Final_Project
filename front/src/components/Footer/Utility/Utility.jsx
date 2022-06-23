import React from 'react'
import EllipsisElem from '../../UI/EllipsisElem/EllipsisElem'
import s from './Utility.module.sass'

export default function Utility() {
  return (
    <div className={s.main}> Utility Pages
        <EllipsisElem text='Style Guide' />
        <EllipsisElem text='404 Not Found' />
        <EllipsisElem text='Password Protected' />
        <EllipsisElem text='Licenses' />
        <EllipsisElem text='Changelog' />
    </div>
  )
}
