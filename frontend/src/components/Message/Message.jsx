import React from 'react'
import { useEffect, useState, useRef } from 'react'

const Message = ({ message, timeStamp}) => {

  const [msg, setMsg] = useState({})

  const start = useRef(new Date().getTime())

  useEffect(() => {
      let temp = JSON.parse(message)
      setMsg(temp)
  }, [])

  return (
    <div className="flex w-[100%]">
      <div className="sm:hidden md:flex flex-col items-center justify-center w-[15%] border-slate-100 border-2 border-solid rounded-lg shadow-lg m-1">
        <h5 className="text-sm">Current Time</h5>
        <p className="text-sm">{start.current + timeStamp}</p>
      </div>

      <div className="sm:w-[15%] md:w-[10%] flex flex-col items-center justify-center border-slate-100 border-2 border-solid rounded-lg shadow-lg m-1">
        <h5 className="test-sm">User ID</h5>
        <p className="text-sm">{msg.id}</p>
      </div>

      <div className="sm:w-[85%] md:w-[65%] break-words block bg-white my-2 mx-2 shadow-lg py-4 px-10 rounded-lg clear-both shadow-lg">
        {msg.body}
      </div>
    </div>
  )
}

export default Message