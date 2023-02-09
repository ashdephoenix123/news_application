import React from 'react'
import spinner from '../spinner.gif'

const Spinner = () => {
  return (
    <div className='text-center'>
      <img src={spinner} alt="spinner" style={{width: "80px"}}/>
    </div>
  )
}

export default Spinner
