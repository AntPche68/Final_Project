import React, { useEffect, useState } from 'react'
import s from './Book.module.sass'

export default function Books() {
  const [books, setBooks] = useState([]);

  const allBooks = (resolve, reject = () => {}) => {
    fetch("http://localhost:5000/api/book/all")
      .then(data => data.json(), reject)
      .then(resolve);
  }

  useEffect(() => {
    allBooks(setBooks);
  }, [])

  return (
    <div className={s.book}>
      
    </div>
  )
}
