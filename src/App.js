import React from 'react';
import Main from './components/MainComponent';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Main />
        </div>  
      </div>
    </BrowserRouter>
  );
}

export default App;
