import React, { useState } from 'react'
import ChatBox from './ChatBox'
import LeftNav from './LeftNav'

const App = () => {
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Hi there! How can I help you today?',
    },
  ])

  const handleNewMessage = (text) => {
    setMessages([
      ...messages,
      {
        sender: 'user',
        text,
      },
    ])
    setTimeout(() => {
      setMessages([
        ...messages,
        {
          sender: 'bot',
          text: 'Would you like to check out our new arrivals?',
        },
      ])
    }, 1000)
  }

  return (
    <div className="app">
      <LeftNav />
      <ChatBox messages={messages} onNewMessage={handleNewMessage} />
    </div>
  )
}

export default App
