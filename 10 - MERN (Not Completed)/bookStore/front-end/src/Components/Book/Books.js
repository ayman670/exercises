import React, { useEffect, useState } from 'react'
import axios from 'axios'

const URL = 'http://localhost:8080/books/'
const fetch = async()=> {
  return await axios.get(URL).then((res)=>res.data)
}

const Books = () =>{

  
  const [books, setBooks] =  useState();
  
  useEffect(() => {
    fetch().then((data) => setBooks(data));
  })
  console.log(books)
  return <div>all books are here</div>
}
export default Books;