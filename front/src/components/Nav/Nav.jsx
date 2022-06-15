import React from 'react'
import Button from '../UI/Button/Button'
import s from './Nav.module.sass'

export default function Nav() {
  return (
    <header className={s.nav}>
        
        <div className={s.social}>
            <a href="#" className={s.logo}>
                <img src="/img/logo.png" alt="LOGO" />
            </a>
            <div className={s.icon}>
                <a href="#">
                    <img src="/img/fb.png" alt="Facebook" />
                </a>
                <a href="#">
                    <img src="/img/tw.png" alt="Twitter" />
                </a>
                <a href="#">
                    <img src="/img/in.png" alt="Linkedin" />
                </a>
            </div>
        </div>
        
        <div className={s.menu}>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Pages</a>
            <a href="#">Contact Us</a>
        </div>

        <Button>Order Today</Button>

    </header>
  )
}
