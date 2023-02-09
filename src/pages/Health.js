import React from 'react'
import Collection from '../components/Collection'

const Health = (props) => {
  return (
    <>
      <Collection category={props.category} apikey={props.apikey}/>
    </>
  )
}

export default Health
