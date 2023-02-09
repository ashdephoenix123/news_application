import React from 'react'
import Collection from '../components/Collection'

const Sports = (props) => {
  return (
    <>
      <Collection category={props.category} apikey={props.apikey}/>
    </>
  )
}

export default Sports
