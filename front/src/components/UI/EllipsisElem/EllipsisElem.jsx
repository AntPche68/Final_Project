import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import s from './EllipsisElem.module.sass'

export default function EllipsisElem({text=''}) {
  return (
    <div className={s.main}>
        <a href="#">
            <FontAwesomeIcon icon="fa-solid fa-ellipsis" style={{ color: '#FFCA42', paddingRight: '10px' }}/>
            {text}
        </a>
    </div>
  )
}
