import React, { useEffect, useState } from 'react'
import s from './WhatWillYouLearn.module.sass'
import img from '../../media/girlbook.png'

export default function WhatWillYouLearn() {
  const [learnings, setLearnings] = useState([]);

  const allLearnings = (resolve, reject = ()=>{}) => {
    fetch('http://localhost:5000/api/learning/all')
          .then(data=>data.json(), reject)
          .then(resolve);
  }

  useEffect(()=>{
    allLearnings(setLearnings)
  }, [])


  return (
    <div className={s.main}>
        <div className={s.title}>
            <h2>What Will You Learn</h2>
        </div>
        <div className={s.section}>
            <div className={s.elements}>
              {learnings.map(t=>
                <div className={s.step} key={t.id}>
                   <div className={s.number}>{t.number}</div> 
                   <div className={s.text}>{t.text}</div> 
                </div>
                )}
            </div>
            <div className={s.image}>
                <img src={img} alt="Girl with the book" />
            </div>
        </div>    
    </div>
  )
}
