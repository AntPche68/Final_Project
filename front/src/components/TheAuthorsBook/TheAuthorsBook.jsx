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
    <div className={s.authors_book}>
        <h1>The Author's Book</h1>
        <div>
         {books.map(t=>
            <div key={t.id}>
            <div>
              <img src={process.env.PUBLIC_URL + t.cover} alt="book" />
              </div>
              <div>
                <p>{t.title}</p>  
                <p>{`$ ${t.price} USD`}</p>  
                <p>{t.abstract}</p>  
                <p>{t.type}</p>
              </div>
            </div>  
            )}
        </div>
    </div>
  )
}
