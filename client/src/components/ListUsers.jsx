import React from 'react'
import User from './User'
import { useSelector } from 'react-redux'
import Loading from './Loading'

const ListUsers = () => {
  //console.log(ListUsers)
  const users = useSelector((state) => state.userReducer.users)
const isLoad = useSelector ((state)=>state.userReducer.isLoad)
//console.log(isLoad)

  return (
    <div style={{display:"flex", justifyContent:"space-between",flexWrap:"wrap",margin:"50px", gap:"20px"}}>
{isLoad && <Loading/>}
      {
      users
      .filter ((user)=>user.isAdmin !==true)
      .map((user) => (
        <User key={user._id} user={user} />
      ))}
    </div>
  )
}

export default ListUsers
      
