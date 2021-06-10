import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
import './App.css';

const ENDPOINT = 'http://localhost:4001/';

function App() {
  const [ response, setResponse ] = useState('{ awaiting connection... }');
  
  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    
    socket.on('FromAPI', (data) => {
      setResponse(data);
    });
    
    return () => socket.disconnect();
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://www.valentinog.com/blog/socket-react/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learning socket.io
        </a>
        <p>
          The time is <time dateTime={response}>{ response }</time>
        </p>
      </header>
    </div>
  );
}

export default App;
