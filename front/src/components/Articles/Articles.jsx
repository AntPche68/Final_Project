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
        <section>
          {articles.map(t=>
            <div key={t.id}>
               <div>
                <img src={process.env.PUBLIC_URL + t.image} alt="image" /> 
                </div> 
                <p>{t.title}</p>
                <p>{t.abstract}</p>
                <p>{t.date}</p>
            </div>
            )}
        </section>
    </div>
  )
}
