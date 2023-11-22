import { useState } from "react"

function ChatWindow(props) {
  const selectedUser = props.selectedUser
  const selectedUserId = selectedUser ? selectedUser[0].id : null
  const selectedUserName = selectedUser ? selectedUser[0].name : ""

  const [userMessages, setUserMessages] = useState({})
  const [messageText, setMessageText] = useState("")

  const addText = () => {
    if (messageText.trim() === "") {
      return
    }

    const currentMessages = userMessages[selectedUserId] || []

    setUserMessages({
      ...userMessages,
      [selectedUserId]: [...currentMessages, messageText],
    })

    setMessageText("")
  }

  const messages = userMessages[selectedUserId] || []

  const messageList = messages.map((message, index) => (
    <li key={index} className="your-message-class">
      <span className="message-text">{message}</span>
    </li>
  ))

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addText()
    }
  }

  return (
    <div className="chat-container">
      <div className="top-right-list">
        <ul>
          {messages.length === 0 ? (
            <h1 className="no-messages">No messages yet... 🏎️</h1>
          ) : null}
          {messageList}
        </ul>
      </div>
      <div className="chat-content">
        <input
          type="text"
          placeholder={`Send a message to ${selectedUserName}...`}
          onChange={(event) => setMessageText(event.target.value)}
          onKeyDown={handleKeyDown}
          value={messageText}
        />
        <button onClick={addText}>Send</button>
      </div>
    </div>
  )
}

export default ChatWindow
