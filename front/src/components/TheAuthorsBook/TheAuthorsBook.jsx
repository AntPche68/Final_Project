import React from 'react'
import Book from '../Book/Book'
import s from './TheAuthorsBook.module.sass'


export default function TheAuthorsBook({books}) {
  return (
    <div className={s.authors_book}>
        <h1>The Author's Book</h1>
        <div>
          {/* {books.map(book=><Book key={book.id} {...book}/>)} */}
        </div>
    </div>
  )
}
