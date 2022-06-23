import './App.css';
import AboutTheAuthor from './components/AboutTheAuthor/AboutTheAuthor';
import Articles from './components/Articles/Articles';
import Footer from './components/Footer/Footer';
import GetBookCopyToday from './components/GetBookCopyToday/GetBookCopyToday';
import Main from './components/Main/Main';
import TheAuthorsBook from './components/TheAuthorsBook/TheAuthorsBook';
import TrustedByTheBest from './components/TrustedByTheBest/TrustedByTheBest';
import WhatWillYouLearn from './components/WhatWillYouLearn/WhatWillYouLearn';


function App() {


  return (
    <div className="App">
      <Main />
      <TheAuthorsBook />
      <AboutTheAuthor />
      <TrustedByTheBest />
      <GetBookCopyToday />
      <WhatWillYouLearn />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
