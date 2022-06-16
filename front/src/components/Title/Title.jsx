import React from 'react'
import s from './Title.module.sass'
import Button from '../UI/Button/Button'
import Round from '../UI/Round/Round'

export default function Title() {
  return (
    <div className={s.main}>
        <div className={s.text}>
            <section className={s.title}>
                <h2>Welcome to Pages!!!</h2>
                <h1>
                    Your Books From 
                    <br/>
                    The Best Writer.
                </h1>
                <p>
                    We believe that reading books are essential to a healthy culture.
                    <br/>
                    They’re where authors can connect with readers.
                </p>
            </section>
            <div className={s.btns}>
                <Button>Order Today</Button>
                <a href="#">Read Free Demo</a>
            </div>
            <div className={s.round}>
                <Round text='250 pages'>Pages:</Round>
                <Round text='10 Hours'>Length:</Round>
                <Round text='4.5/5 (305 ratings)'>Rating:</Round> 
            </div>

        </div>
        <div className={s.book}>
            <img src="/img/book.png" alt="Book_Title" />
        </div>
    </div>
  )
}
