import {initializeApp} from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyClZYLebdW94UorXnF25JQOf_4oROBTq-c',
  authDomain: 'my-doctor-01-d6608.firebaseapp.com',
  databaseURL:
    'https://my-doctor-01-d6608-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'my-doctor-01-d6608',
  storageBucket: 'my-doctor-01-d6608.appspot.com',
  messagingSenderId: '990914074833',
  appId: '1:990914074833:web:6e8b746db65621d9628df0',
};

const Fire = initializeApp(firebaseConfig);

export default Fire;
