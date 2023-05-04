import React from 'react'

const Chatcontainer = (props) => {
  return (
    <div>
            <div className='card border-2 border-info w-100'>
                <div className="row vh-95">
                    <div className="w-100 d-flex flex-column col-12 col-lg-12 chat-window">
                       {props.children}
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Chatcontainer
