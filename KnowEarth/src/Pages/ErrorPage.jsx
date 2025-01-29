import React from 'react'
import { useRouteError } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
const ErrorPage = () => {
    const error = useRouteError()
    console.log(error)
  return (
      <>
      <h1>{error.data}</h1>
      <NavLink to="/">
        
      <button> Go back to Ghar</button>
      </NavLink>
      </>
  )
}

export default ErrorPage