import React from 'react'

const Heading = (props) => {
  return (
    <div>
      <>
        <h2 className='display-5 ms-5 pb-3'>{props.title}</h2>
      </>
    </div>
  )
}

export default Heading
