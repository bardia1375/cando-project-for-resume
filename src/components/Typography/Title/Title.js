import { Typography } from '@material-ui/core'
import React from 'react'

function Title(props) {
  return (
  <Typography variant={props.variant} style={{fontWeight:"bold",color:"rgb( 227 ,156 ,0)"}}>
    {props.title}
  </Typography>
  )
}

export default Title