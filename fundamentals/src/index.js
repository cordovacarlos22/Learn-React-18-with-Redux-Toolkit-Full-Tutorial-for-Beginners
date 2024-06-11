/* The code you provided is a JavaScript code snippet that utilizes React to create a simple book list
application. Here is a breakdown of what the code is doing: */
import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css'
const books = [
  {
    id: 1,
    title: 'The Housemaid Is Watching',
    author: 'Jordan Moore',
    image: 'https://images-na.ssl-images-amazon.com/images/I/91OSM58Y-pL._AC_UL600_SR600,400_.jpg'
  },
  {
    id: 2,
    title: 'Eruption',
    author: 'Michael Crichton',
    image: 'https://images-na.ssl-images-amazon.com/images/I/81SIQfF-aGL._AC_UL900_SR900,600_.jpg'
  },
  {
    id: 3,
    title: 'Atomic Habits',
    author: ' James Clear ',
    image: 'https://images-na.ssl-images-amazon.com/images/I/81YkqyaFVEL._AC_UL900_SR900,600_.jpg'
  },
  {
    id: 4,
    title: 'Swan Song',
    author: 'Elin Hilderbrand',
    image: 'https://images-na.ssl-images-amazon.com/images/I/71dSn3QCY6L._AC_UL600_SR600,400_.jpg'
  }

]


/**
 * The function `Greeting` is a React component that renders an `<h1>` element with the text "my first
 * component".
 * @returns A React functional component named Greeting is being returned. It renders an h1 element
 * with the text "my first component".
 */
const Greeting = () => {
  return <h1> my first component</h1>
}
/**
 * The BookList component renders a section containing multiple Book components with image, title, and
 * author props.
 * @returns A section with a list of Book components, each displaying an image, title, and author of a
 * book.
 */
const BookList = () => {
  return (
    <section className='booklist'>
      {books && books.map((book,) => {
        const { title, author, image, id } = book;
        return (
          <Book
            key={id}
            id={id}
            title={title}
            author={author}
            image={image}
          />
        )
      })}
    </section>
  )
};

const Book = ({ id, title, author, image, children }) => {
  /* `const { title, author, image } = props;` is a destructuring assignment in JavaScript. It is
  extracting the `title`, `author`, and `image` properties from the `props` object passed to the
  `Book` component. This syntax allows you to easily access these specific properties from the
  `props` object within the component without having to use `props.title`, `props.author`, and
  `props.image` every time. */
  // { const { title, author, image } = props; //! one way of doing this but we can also desctructuring this at parametes on function using {}}
  return (
    <article
      id={id}
      className='book'>
      <img
        src={image}
        alt={title} />
      <h2>{title} </h2>
      <h4 >{author}</h4>
      {children}
    </article>
  )
};


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);

export default Greeting;