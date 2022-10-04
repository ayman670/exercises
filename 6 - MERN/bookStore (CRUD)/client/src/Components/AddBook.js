import React, { useState } from 'react'
import {Button, FormLabel, TextField } from "@mui/material"

function addBook() {
  const [input, setInput] = useState({
    name: "",
    description: "",
    price: "",
    author: "",
    available: "",
    image : ""
  });
  return (
    
    <form>
      <FormLabel>Name</FormLabel>
      <TextField margin='normal' fullWidth variant='outlined' name='name' />

      <FormLabel>Author</FormLabel>
      <TextField margin='normal' fullWidth variant='outlined' name='author' />

      <FormLabel>Description</FormLabel>
      <TextField margin='normal' fullWidth variant='outlined' name='description' />

      <FormLabel>Price</FormLabel>
      <TextField margin='normal' fullWidth variant='outlined' name='price' />
      <Button variant='contained' type='submit'>Add book</Button>

      <FormLabel>Image</FormLabel>
      <TextField margin='normal' fullWidth variant='outlined' name='image' />
      <Button variant='contained' type='submit'>Add book</Button>
    </form>
  )
}

export default addBook;
