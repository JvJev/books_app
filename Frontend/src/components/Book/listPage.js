import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Book from './BookCard';
import './Book.css';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';



const URL = 'http://localhost:5000/books';
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Books = () => {
  const [books, setBooks] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books));
  }, []);
  console.log(books);
  return (
    <div>
       <div className='first'>
        {books &&
          books.map((book, i) => (
            <div className='second' key={i}>
              <Book book={book} />
            </div>
          ))}
      </div>
      <div className='addButtonDiv'>
      <Button LinkComponent={Link} to={`/add`} variant="contained" color="primary">Add new data</Button>

      </div>
    </div>
     
  );
};

export default Books;
