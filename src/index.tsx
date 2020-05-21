import * as React from 'react';
import * as ReactDOM from 'react-dom';
import firebase from '@firebase/app';
import '@firebase/firestore';
import App from "./App";
import { FirestoreProvider } from 'react-firestore';


const config = {
  apiKey: process.env.FIRESTORE_API_KEY,
  projectId: process.env.PROJECT_ID,
};

firebase.initializeApp(config);

ReactDOM.render(
  <FirestoreProvider firebase={firebase}>
    <App />
  </FirestoreProvider>
  , document.getElementById('app'));

