import { useEffect, useState } from 'react';
import './App.css';
import AboutTheAuthor from './components/AboutTheAuthor/AboutTheAuthor';
import GetBookCopyToday from './components/GetBookCopyToday/GetBookCopyToday';
import Main from './components/Main/Main';
import TheAuthorsBook from './components/TheAuthorsBook/TheAuthorsBook';
import TrustedByTheBest from './components/TrustedByTheBest/TrustedByTheBest';
import WhatWillYouLearn from './components/WhatWillYouLearn/WhatWillYouLearn';
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
      <TrustedByTheBest />
      <GetBookCopyToday />
      <WhatWillYouLearn />
    </div>
  );
}

export default App;
