import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import { io } from "socket.io-client";
import React from 'react'
import Main from './Components/Main';

const socket=io("http://localhost:5000");




function App() {
 
  return (
    <Main socket={socket}/>
  );
}

export default App;
