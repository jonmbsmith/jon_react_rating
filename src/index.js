import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
// import * as firebase from 'firebase'
import firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyA3csMAkGGcdB0bbVj2oSsRUbKFLIjqCtU',
  authDomain: 'jon-react-rating.firebaseapp.com',
  databaseURL: 'https://jon-react-rating.firebaseio.com',
  projectId: 'jon-react-rating',
  storageBucket: 'jon-react-rating.appspot.com',
  messagingSenderId: '705630292476',
  appId: '1:705630292476:web:3a836f54842d2dd4390a79',
  measurementId: 'G-W2S8WH1EPP'
}

firebase.initializeApp(firebaseConfig)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
