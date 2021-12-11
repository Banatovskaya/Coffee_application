import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/app';
// import a from './db.json'
import 'bootstrap/dist/css/bootstrap.min.css';

// fetch('./server.php')
//         .then((data) => {
//         console.log("appjkkk",data.text())
//         // console.log(a)
//         })

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

