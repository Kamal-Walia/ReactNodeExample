import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';

function App() {
  const [serverMsg, setServerMsg] = useState({});
  useEffect(() => {
      fetch('/greetings').then((res => res.json().then(response => {
        console.log('Data', response)
        setServerMsg(response);
      })))
  }, [])

  return (
    <div className="App">
      <p>{serverMsg.message}</p>
    </div>
  );
}

export default App;
