import React, { useEffect, useState } from 'react'
import s from './Articles.module.sass'

export default function Articles() {
  const [articles, setArticles] = useState([]);

  const allArticles = (resolve, reject = ()=>{}) =>{
      fetch("http://localhost:5000/api/article/all") 
          .then(data=>data.json(), reject)
          .then(resolve);
  }

  useEffect(()=>{
      allArticles(setArticles);
  }, [])

  return (
    <div className={s.main}>
        <h2>Articles & Resources</h2>
        <div className={s.card}>
          {articles.map(t=>
            <div className={s.article} key={t.id}>
              <div className={s.image}>
                <img src={process.env.PUBLIC_URL + t.image} alt="image" /> 
              </div>
              <div className={s.text}>
                <p className={s.title}>{t.title}</p>
                <p className={s.abstract}>{t.abstract}</p>
                <p className={s.date}>October 6, 2021</p>
              </div> 
            </div>
          )}
        </div>
    </div>
  )
}
