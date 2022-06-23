import React from 'react'
import s from './Footer.module.sass'
import logo from '../../media/logo.png'
import fb from '../../media/fb.png'
import tw from '../../media/tw.png'
import ln from '../../media/in.png'
import inst from '../../media/inst.png'
import Explore from './Explore/Explore'
import Utility from './Utility/Utility'
import Contacts from './Contacts/Contacts'

export default function Footer() {
  return (
    <footer className={s.main}>

        <div className={s.social}>
            <a href="#" className={s.logo}>
                <img src={logo} alt="logo" />
            </a>
            <div className={s.icon}>
                <a href="#">
                    <img src={fb} alt="Facebook" />
                </a>
                <a href="#">
                    <img src={tw} alt="Twitter" />
                </a>
                <a href="#">
                    <img src={ln} alt="Linkedin" />
                </a>
                <a href="#">
                    <img src={inst} alt="Instagram" />
                </a>
            </div>
        </div>
        <Explore />
        <Utility />
        <Contacts />
    </footer>
  )
}
