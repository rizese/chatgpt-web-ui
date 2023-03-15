import React from 'react'
import './NavigationBar.css'

const NavigationBar = ({ conversations }) => {
    return (
        <div className="navigation-bar">
            {conversations.map((conversation, index) => (
                <div key={index} className="conversation">
                    <div className="conversation-image">
                        <img src={conversation.image} alt="conversation" />
                    </div>
                    <div className="conversation-info">
                        <div className="conversation-name">{conversation.name}</div>
                        <div className="conversation-message">{conversation.lastMessage}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default NavigationBar
