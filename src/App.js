import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="profile-img-container">
          <img src="/images/sbell.png" className="picture" alt="picture" />
        </div>
        <h1>
          Sophia Bell
        </h1>
        <nav>
          <a href="https://github.com/Kittaru87" add target="_blank">Github</a>
          <a href="https://www.linkedin.com/in/sophia-bell-1a945a2b/" add target="_blank">LinkedIn</a>
          <a href="https://medium.com/@sophbell87" add target="_blank">Blog</a>
          <a href="mailto:sophbell87@gmail.com" add target="_blank">Email</a>
        </nav>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
