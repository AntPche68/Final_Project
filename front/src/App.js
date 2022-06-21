import { useEffect, useState } from 'react';
import './App.css';
import AboutTheAuthor from './components/AboutTheAuthor/AboutTheAuthor';
import Main from './components/Main/Main';
import TheAuthorsBook from './components/TheAuthorsBook/TheAuthorsBook';
// import {getBooks} from './requests';

function App() {

  // const [book, setBook] = useState([]);



  // useEffect(() => {
  //   getBooks(setBook)
  // }, [])

  return (
    <div className="App">
      <Main />
      <TheAuthorsBook />
      <AboutTheAuthor />
    </div>
  );
}

export default App;
