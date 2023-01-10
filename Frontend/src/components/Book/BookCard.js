import { Button } from '@mui/material';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Book.css';

const BookCard = (props) => {
  const history = useNavigate();
  const { _id, name, author, description, price, image } = props.book;
  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/books/${_id}`)
      .then((res) => res.data)
      .then(() => history('/'))
      .then(() => history('/books'));
  };

  return (
    <div className="card">
      <div className='imageDiv'>
      <img src={image} alt={name} />
      </div>
      
      <div className="book-info">
        <p>By {author}</p>
        <p>"{name}"</p>
        <p>{description}</p>
        <p>{price} Eur</p>
      </div>
      <div className='buttonDiv'>
        <Button LinkComponent={Link} to={`/books/${_id}`} sx={{ mt: 'auto' }}>
          Update
        </Button>
        <Button color="error" onClick={deleteHandler} sx={{ mt: 'auto' }}>
          Delete
        </Button>
      </div>
      
    </div>
  );
};

export default BookCard;
