import React from 'react'
import s from './Title.module.sass'
import Button from '../UI/Button/Button'

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

        </div>
        <div className={s.book}>
            <img src="/img/book.png" alt="Book_Title" />
        </div>
    </div>
  )
}
