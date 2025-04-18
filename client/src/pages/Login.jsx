import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../JS/actions/auth.Action';
//import { LOAD_AUTH } from '../JS/actionsTypes/auth.ActionTypes';
import Loading from '../components/Loading';

const Login = () => {
  const [user,setUser]=useState({
    email:"", password:""});

const dispatch=useDispatch();
const navigate=useNavigate();
const isLoad=useSelector((state)=>state.authReducer.isLoad)
const handleChange=(e)=>{
  setUser ({...user,[e.target.name]:e.target.value})
}
const handleLogin=(e)=>{
  e.preventDefault()
  console.log("✅ Données envoyées :", user);
  dispatch(login(user,navigate))
}
  return (
    <div className="container">
      {isLoad && <Loading/>}
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" value={user.email} onChange={handleChange}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="text" placeholder="Password"  name="password" value={user.password} onChange={handleChange} />
        </Form.Group>
        <p>If you don't have an account please <a href="/register">register</a> </p>
        <Button variant="outline-primary" type="submit">
          Login
        </Button>

      </Form>
    </div>
  )
}

export default Login
