import React, { useState } from 'react'
import styles from './ChatBox.module.scss'

const ChatBox = ({ messages, onNewMessage }) => {
  const [newMessage, setNewMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const handleInputChange = (event) => {
    setNewMessage(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (newMessage.trim() === '') return
    onNewMessage(newMessage)
    setIsTyping(true)
    setNewMessage('')
    setTimeout(() => {
      setIsTyping(false)
    }, 1000)
  }

  return (
    <div className={styles.chatBot}>
      {messages.map((message, index) => (
        <div
          key={index}
          className={`${styles.chatBubble} ${message.sender === 'user' ? 'user' : 'bot'} ${
            isTyping && message.sender === 'bot' ? 'typing' : ''
          }`}
        >
          {message.text}
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <input type="text" value={newMessage} onChange={handleInputChange} placeholder="Type a message..." />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default ChatBox
