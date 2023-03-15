import React from 'react'
import styles from './ChatBox.module.scss'

const ChatBox = ({ messages }) => {
  return (
    <div className={styles.chatBox}>
      {messages.map((message, index) => (
        <div key={index} className={`${styles.chatBubble} ${message.sender === 'user' ? 'user' : 'bot'}`}>
          {message.text}
        </div>
      ))}
    </div>
  )
}

export default ChatBox
