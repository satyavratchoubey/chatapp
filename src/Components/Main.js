import React, { useState, useEffect } from 'react'
import Login from './Login';
import Chat from './Chat';

const Main = ({ socket }) => {
  const [newUser, setnewUser] = useState("");
  const [User, setUser] = useState({ userId: null, username: null });

  // const [User, setUser] = useState({});
  const [Users, setUsers] = useState([]);
  const [Message, setMessage] = useState("");
  const [Messages, setMessages] = useState([]);


  useEffect(() => {
    socket.emit("Users", (Users) => {
      const MessagesArr=[];
      for (const {userId, username} of Users) {
        const newMessage={type:"UserStatus",userId,username};
        MessagesArr.push(newMessage);
      }
     setMessages([...Messages,...MessagesArr])
     setUsers(Users)
    });
    socket.emit("session", ({userId, username}) => {
      setUser(username);
    });
    socket.on("user connected",({userId,username})=>{
      const newMessage={type:"UserStatus",userId,username};
      setMessages([...Messages,newMessage]);

    })
    socket.on("new message",({userId,username,Message})=>{

        const newMessage ={type:"Message",userId:userId, 
        username:username,Message }
        setMessages([...Messages,newMessage]);
    })
  }, [socket,Messages]);




  function handlechange({ currentTarget }) {
    console.log("yes")
    setnewUser(currentTarget.value);
    console.log(setnewUser)
  }
  function lognewUser() {

    console.log(newUser)
    setUser(newUser);
    console.log(User);
    setUser({ username: newUser });
    socket.auth = { username: newUser };
    socket.connect();
    socket.emit('user-login', newUser);
    console.log("working")
    const newMessage = { type: "UserStatus", userId: socket.id, username: newUser };
    setMessages([...Messages, { type: 'UserStatus', username: newUser }]);

  // setMessages([...Messages, newMessage]);
  }

function sendMessage(){
  socket.emit("new message",Message )

  const newMessage ={type:"Message",userId:User.userId, username:User.username,Message }
  setMessages([...Messages,newMessage]);
  setMessage("");

}

  return (
    <main className='content'>
      <div className="container mt-3">
        {User.username && <Chat User={User} Message={Message}
         Messages={Messages} sendMessage={sendMessage} setMessage={setMessage} />}
        {!User.username && (
          <Login handlechange={handlechange} newUser={newUser} lognewUser={lognewUser} />
        )}

      </div>
    </main>
  )
}

export default Main
