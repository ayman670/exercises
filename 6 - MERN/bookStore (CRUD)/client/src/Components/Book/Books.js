import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Book from './Book';

const URL = 'http://localhost:8080/books';


const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data)
}

const Books = () => {

  const [books, setBooks] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books));
  }, [])


  return <div>
    <ul>
      {books && books.map((book, i) => (
          <div className='Book' key={i}>
            <Book book={book} />
          </div>
        ))}
    </ul>
  </div>
}


export default Books;