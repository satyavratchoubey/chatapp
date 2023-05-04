import React from 'react'
import Chatcontainer from './Chatcontainer'
import Chatheader from './Chatheader'
import Chatinput from './Chatinput'
import ScrollableFeed from 'react-scrollable-feed'

const Chat = ({ User, Message, Messages,setMessage ,sendMessage }) => {
    return (
        <>
        <Chatcontainer >
         <Chatheader User={User}/>
         <div className="position-relative chat-height overflow-auto">
            <ScrollableFeed> 
            <div className="d-flex flex-column p-4">
                {Messages.map((Message,index)=>{
                    return Message.type==="UserStatus"? <div key={index} className="text-center">
                        <span className="badge bg-info">
                            {Message.userId===User.userId?"You have joined!":`${Message.username || ''} has joined`}
                        </span>
                    </div>:
                    <div key={index} className={Message.userId===User.userId
                        ?"chat-message-right pb-4"
                        :"chat-message-left pb-4 "}>
                            <div>
                                <img src="https://cdn-icons-png.flaticon.com/512/5556/5556520.png"
                                 className='rounded-circle mr-1' alt={Message.username}
                                 title={Message.username}  width="40"  height="40" />
                                 <div className="text-muted small text-nowrap mt-2">
                                    10:00AM

                                 </div>
                            </div>
                            <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                                <div className="font-weight-bold mb-1">
                                    {Message.userId===User.userId?"You":Message.username}

                                </div>
                                {Message.Message}

                            </div>

                        </div>
                    
                    ;
                })}
            </div>
            </ScrollableFeed>
         </div>
         <Chatinput Message={Message} setMessage={setMessage} sendMessage={sendMessage}/>
         </Chatcontainer >
        
         </>
        
         
    )
}

export default Chat
