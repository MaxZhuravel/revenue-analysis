import React from 'react'
import Cell from './Cell'
import classes from './UserItem.module.css'

const UserItem = ({id,name,date,isActive}) => {
    let status = "Disable"
    if(isActive){
        status = "Active"
    }
  return (
    <div className={classes.UserItem}>
        <Cell keyp = 'name' data = {name}/>
        <Cell keyp = 'date' data = {date.slice(0,10)}/>
        <Cell keyp = 'status' data = {status}/>
    </div>
  )
}

export default UserItem