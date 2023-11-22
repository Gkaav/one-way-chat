import { useState } from "react"

function Sidebar(props) {
  const firstBox = (userId) => {
    return userId === 1 ? "first-box" : ""
  }

  const [selectedUser, setSelectedUser] = useState(null)
  
  const handleUserClick = (userId) => {
    setSelectedUser(userId)
    props.setSelectedUser(props.users.filter((user) => user.id === userId))
  }

  return (
    <div className="side-bar">
      {props.users.map((user) => (
        <div
          key={user.id}
          className={`user-box ${firstBox(user.id)} ${
            selectedUser === user.id ? "active-box" : ""
          }`}
          onClick={() => handleUserClick(user.id)}
        >
          <h2>{user.name}</h2>
          <img src={user.picture} alt={user.name} />
        </div>
      ))}
    </div>
  )
}

export default Sidebar
