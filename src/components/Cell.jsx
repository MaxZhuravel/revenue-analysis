import React from 'react'
import classes from './Cell.module.css'

const Cell = ({keyp, data}) => {
    if(keyp === 'name')
    return (
        <div className={classes.CellName}>{data}</div>    
    )
    else if(keyp === 'date') return(
        <div className={classes.CellDate}>{data}</div>    
    )
    else if (keyp === 'status' && data === 'Active')
    return(
        <div className={classes.CellStatusActive}>{data}</div>    
    )
    else return(
        <div className={classes.CellStatusDisable}>{data}</div>
    )
}

export default Cell