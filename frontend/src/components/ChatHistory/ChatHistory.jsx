import React from 'react'
import Message from '../Message/Message'

const ChatHistory = ({ chatHistory }) => {

  const messages = chatHistory.map((msg, idx) => (
    <Message message={msg.data} timeStamp={msg.timeStamp} key={idx} />
  ))

  return (
  <div className="w-[100%] flex justify-center items-center">
    <div className="px-12 h-[650px] sm:w-[550px] md:w-[850px] lg:w-[1000px] overflow-y-auto bg-slate-200 border-emerald-400 border-solid border-8 rounded-xl">
      <h2 className="p-4 text-2xl flex flex-col items-center">Chat History</h2>
      {messages}
    </div>
   </div>
  )
}

export default ChatHistory