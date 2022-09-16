import React from 'react'
import classes from './Header.module.css'

const Header = () => {
  return (
    <div className={classes.Header}>
        <div className={classes.HeaderName}>NAME</div>
        <div className={classes.HeaderDate}>DATE</div>
        <div className={classes.HeaderState}>STATE</div>
    </div>
  )
}

export default Header