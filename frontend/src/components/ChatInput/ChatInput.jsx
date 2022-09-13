import React, { useState } from 'react'
import { sendMsg } from "../../api/index.js";

const ChatInput = () => {

  const [msg, setMsg] = useState("")

  const handleChange = e => {
    setMsg(e.target.value);
  }

  const sendWithEnter = (e) => {
    if(e.keyCode === 13) {
      sendMsg(e.target.value)
      e.target.value = ""
    }
  }

  const send = () => {
    sendMsg(msg)
  }

  return (
    <div className="w-[100%] flex justify-center">
      <div className="flex justify-center items-center sm:w-[450px] md:w-[750px] lg:w-[900px]">
        <div className="w-[80%] flex justify-center">
            <input 
            className="block w-[100%] py-4 px-8 m-4 text-lg rounded-lg border-slate-100 border-2 shadow-2xl border-slate-100 border-2 border-solid "
            type="text"
            onChange={handleChange}
            onKeyDown={sendWithEnter}
            />
        </div>

        <button
          onClick={send}
          className="w-[10%] rounded-lg bg-emerald-500 h-14 m-4 shadow-2xl sm:p-0 md:p-2 border-emerald-800 border-2 border-solid"
        >
          Send
        </button>
      </div>
    </div>
  )
}

export default ChatInput