import { useState } from "react"
import Sidebar from "./components/Sidebar"
import ChatWindow from "./components/ChatWindow"
import "./App.css"
import users from "./users"

function App() {
  const [startChat, setStartChat] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)

  const onStartChat = () => {
    setStartChat(!startChat)
  }

  return (
    <div>
      {startChat ? (
        <div className="chat-box">
          <Sidebar users={users} setSelectedUser={setSelectedUser} />
          <ChatWindow selectedUser={selectedUser} />
        </div>
      ) : (
        <button className="chat-button" onClick={onStartChat}>
          Start Chatting
        </button>
      )}
    </div>
  )
}

export default App
