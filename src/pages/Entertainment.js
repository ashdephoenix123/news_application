import React from 'react'
import Collection from '../components/Collection'

const Entertainment = (props) => {
  return (
    <>
      <Collection category={props.category} apikey={props.apikey}/>
    </>
  )
}

export default Entertainment
