import React from 'react';
import '../../src/App.css'

const Chatinput = ({ Message, setMessage, sendMessage }) => {
  return (
    <div className="mt-auto align-items-end border-info py-3 px-4 border-top d-lg-block myinput chat-input">
      <div className="input-group flex-fill" >
        <input 
          type="text"
          className="form-control " 
          name="Message"
          value={Message}
          placeholder="Type your message..."
          onChange={({ currentTarget: input}) => setMessage(input.value)}
          onKeyDown={(e)=>e.code==="Enter"?sendMessage():null}
          style={{ minWidth: "0px" }}
        />
        <button className="btn btn-info flex-shrink-1">Send</button>
      </div>
    </div>
  );
};

export default Chatinput;
