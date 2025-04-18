import React, { useState } from 'react'
import {Form, Button} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import { register } from '../JS/actions/auth.Action'
import { useNavigate } from 'react-router-dom'
import Loading from '../components/Loading'

const Register = () => {
  const [newUser, setNewUser]= useState ({
    name:"", email:"",password:"",phone:"",
  });
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const isLoad=useSelector((state)=>state.authReducer.isLoad)

  
  const handleChange=(e)=>{
    setNewUser({...newUser,[e.target.name]:e.target.value})
  }
const handleRegister=(e)=> {
  e.preventDefault()
  dispatch(register(newUser,navigate));

}

  return (
    <div className='container'>
      {isLoad && <Loading/>}
      <Form onSubmit={handleRegister}>
      <Form.Group className="mb-3">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" placeholder="Enter your name" name="name" value={newUser.name} onChange={handleChange} />
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" value={newUser.email} onChange={handleChange} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> 
        <div className="mb-3"></div>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="text" placeholder="Password" name="password" value={newUser.password} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3">
      <Form.Label>Phone</Form.Label>
      <Form.Control type="tel" placeholder="Enter your phone number" name="phone" value={newUser.phone} onChange={handleChange}/>
      </Form.Group>
      <p>If you don't have an account please <a href="/login">login</a> </p>
      <Button variant="outline-primary" type="submit">
       Register
      </Button>
      
    </Form>
    </div>
  )
}

export default Register
