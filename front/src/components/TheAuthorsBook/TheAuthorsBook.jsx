import React, { useEffect, useState } from 'react'
import s from './TheAuthorsBook.module.sass'

export default function Books() {
  
  const [books, setBooks] = useState([]);

  const allBooks = (resolve, reject = () => {}) =>{
    fetch('http://localhost:5000/api/book/all')
      .then(data=>data.json(), reject)
      .then(resolve)
  }

  useEffect(() => {
    allBooks(setBooks);
  }, [])

  return (
    <div className={s.main}>
        <h1>The Author's Book</h1>
        <div className={s.authors_book}>
         {books.map(t=>
            <div className={s.books} key={t.id}>
              <div className={s.image}>
                <img src={process.env.PUBLIC_URL + t.cover} alt="book" />
              </div>
              <div className={s.book}>
                <p className={s.title}>{t.title}</p>  
                <p className={s.price}>{`$ ${t.price} USD`}</p>  
                <p className={s.abstract}>{t.abstract}</p>  
                <p className={s.type}>{t.type}</p>
              </div>
            </div>  
            )}
        </div>
    </div>
  )
}
