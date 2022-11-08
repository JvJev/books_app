import React from 'react';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AddBook from './components/AddBook';
import Books from './components/Book/Books';
import About from './components/About';
import Login from './components/Registration/LoginPage';
import Register from './components/Registration/RegisterPage';
import BookUpdate from './components/Book/BookUpdate';

function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/add" element={<AddBook />} exact />
          <Route path="/books" element={<Books />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/books/:id" element={<BookUpdate />} exact />
          <Route path="/register" element={<Register />} exact />
          <Route path="/login" element={<Login />} exact />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
