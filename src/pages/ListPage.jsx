import React, { Children } from 'react'
import classes from './ListPage.module.css'

const ListPage = (props) => {
  return (
    <div className={classes.ListPage}>{props.children}</div>
  )
}

export default ListPage