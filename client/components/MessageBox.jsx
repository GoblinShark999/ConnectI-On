import React from 'react'

export default function MessageBox(props) {
  return (
    <div>      
      <div className='user'> {props.user}: </div>
      <div className='message'> {props.message}</div>
    </div>
  )
}
