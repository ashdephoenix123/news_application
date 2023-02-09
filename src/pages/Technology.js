import React from 'react'
import Collection from '../components/Collection'

const Technology = (props) => {
  return (
    <>
      <Collection category={props.category} apikey={props.apikey}/>
    </>
  )
}

export default Technology
