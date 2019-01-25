import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

// const connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : '',
//     database : 'omni_db'
// });

// const app = express();

// app.get('/tvshows', (req, res) => {
//     connection.connect();

//     connection.query('SELECT * FROM tvshow', (error, results, fields) => {
//         if (error) throw error;
//         res.send(results)
//     });

//     connection.end();
// });
// // Start the server
// app.listen(3000, () => {
// console.log('Go to http://localhost:3000/posts to see posts');
// });