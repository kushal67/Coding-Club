import React from 'react';
import ReactDOM from 'react-dom';
import indexcss from './index.module.css';
import App from './App';
import ChatProvider from './context/ChatProvider.js';

 
 ReactDOM.render(
  <ChatProvider>
        <App />

  </ChatProvider>
    ,
    document.getElementById('root')
)


