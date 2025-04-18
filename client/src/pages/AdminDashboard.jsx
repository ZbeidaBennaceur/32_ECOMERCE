import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import ListUsers from '../components/ListUsers'
import {getUsers} from '../JS/actions/userActions'

const AdminDashboard = () => {

  const dispatch = useDispatch() 
//Hook called every time component is called
  useEffect(() => {
  dispatch(getUsers())}, [dispatch])

  return (
    <div>
      <h1>Dashboard</h1>
      <ListUsers />
    </div>
  )
}

export default AdminDashboard
