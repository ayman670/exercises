import React from 'react';
import {Button} from '@mui/material';
const Book = (props) => {
    const {name, author, description, price, image} = props.book;
  return (
    <div >
        <img src={image} alt={name} />
        <article>By {author} </article>
        <h3>{name}</h3>
        <p>{description}</p>
        <h2>{price}</h2>
        <Button>update</Button>
        <Button>delete</Button>
    </div>
  )
}

export default Book