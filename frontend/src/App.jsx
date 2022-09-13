// App.js
import React, { useEffect, useState } from "react";
import "./App.css";
import { connect } from "./api/index.js";

import Header from './components/Header/Header'
import ChatHistory from "./components/ChatHistory/ChatHistory";
import ChatInput from "./components/ChatInput/ChatInput";

const App = () => {

  useEffect(() => {
    tryConnect()
  }, [])
  

  const [chatHistory, setChatHistory] = useState([])

  const tryConnect = () => {
    connect((msg) => {
      setChatHistory(prev => ([...prev, msg]))
    })
  }

  return (
    <div className="h-max bg-slate-200">
      <Header />
      <ChatHistory chatHistory={chatHistory}/>
      <ChatInput/>
    </div>
  )
}

export default App;