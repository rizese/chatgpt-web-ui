import React from 'react'
import ChatBox from './ChatBox'
import NavigationBar from './NavigationBar'

const exampleConversation = [
  {
      sender: 'bot',
      text: 'Hello! How can I help you today?',
  },
  {
      sender: 'user',
      text: "I'm looking for a new pair of shoes.",
  },
  {
      sender: 'bot',
      text: 'Great! What style of shoes are you interested in?',
  },
  {
      sender: 'user',
      text: "I'm looking for something casual and comfortable.",
  },
  {
      sender: 'bot',
      text: 'We have a wide selection of casual shoes. Let me show you some options.',
  },
]

const App = () => {
    return (
        <div className="app">
            <NavigationBar
                conversations={[
                    {
                        name: 'Support',
                        image: 'https://via.placeholder.com/50',
                        lastMessage: 'How can I assist you today?',
                    },
                    {
                        name: 'Sales',
                        image: 'https://via.placeholder.com/50',
                        lastMessage: 'Have you checked out our new arrivals?',
                    },
                ]}
            />
            <ChatBox messages={exampleConversation} />
        </div>
    )
}

export default App
