import React from 'react'
import img from '../../media/author.png'
import qr from '../../media/qr.png'
import Stats from '../UI/Stats/Stats'
import s from './AboutTheAuthor.module.sass'

export default function AboutTheAuthor() {
  return (
    <div className={s.main}>
        <div className={s.author}>
            <img src={img} alt="author" />
        </div>
        <div className={s.about}>
            <div className={s.main_block}>
                <h2 className={s.h2}>About the Author</h2>
                <p className={s.text}>We believe that bookstores are essential to a healthy culture. 
                    They’re where authors can connect with readers, where we discover new writers, 
                    where children get hooked on the thrill of reading that can last a lifetime.
                </p>
            </div>    
            <div className={s.stats}>
                <Stats text='Books Published'>02</Stats>
                <div className={s.line}></div>
                <Stats text='User Reviews'>4.5</Stats>
                <div className={s.line}></div>
                <Stats text='Best Seller Awards'>04</Stats>
            </div>
            <div className={s.contact}>
                <img src={qr} alt="qr-code" />
                <div className={s.card}>
                    <p className={s.name}>John Abraham , Ph.d</p>
                    <p className={s.mail}>Mail: johnabraham@gmail.com</p>
                    <p className={s.tel}>Phone: (+2) 123 545 9000</p>
                </div>

            </div>
        </div>
    </div>
  )
}
