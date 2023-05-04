import React from 'react'

const Login = ({handlechange, newUser, lognewUser}) => {
  return (
    <div>
       <div className='card w-100 text-center border-white' >
         <div className="row">
           <div className="col-12">
             <h5>Enter Username</h5>
           </div>
           <div className="d-flex justify-content-center" >
             <div className='col-3' >
               <input type="text"
                 name="username"
                 defaultValue={newUser}
                 className='form-control mb-3'
                 placeholder='Username '
                 autoComplete='off'
                 onChange={(e) => handlechange(e)} 
                onKeyDown={(e)=>(e.code=== "Enter"? lognewUser():null)}/>
                 <button className='btn btn-success w-100'onClick={lognewUser} >Join!</button>
             </div>
               
           </div>
         </div>
       </div>
    </div>
  )
}

export default Login
