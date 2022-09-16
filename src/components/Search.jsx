import React from 'react'
import classes from './Search.module.css'

const Search = () => {
  return (
    <div className={classes.wrap}>
        <div className='input-field'>
            
            <input className={classes.input} placeholder='Search'/>
        </div>
    </div>
  )
}

export default Search