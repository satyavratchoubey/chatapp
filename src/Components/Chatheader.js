import React from 'react'

const Chatheader = ({User}) => {
  return (
    <div className="align-items-start py-2 px-4 w-100 border-bottom border-info d-lg-block sticky-top bg-white">
                            <div className="d-flex align-items-center py-1">
                                <div className='position-relative'>
                                    <img src="https://cdn-icons-png.flaticon.com/512/5556/5556520.png" width="40" height="40" alt={User.username} className='rounded-circle mx-2' />
                                </div>
                                <div className="flex-grow-1">
                                    <strong>Logged in as {User.username}</strong>
                                </div>
                            </div>
                            </div>
                            

  )
}

export default Chatheader
