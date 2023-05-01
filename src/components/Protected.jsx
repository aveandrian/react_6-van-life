import React from 'react'
import { Navigate } from 'react-router-dom'
function Protected({ children }) {

    // const pathname = new URL(request.url).pathname
    const isLoggedIn = localStorage.getItem("loggedin") 
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />
  }
  return children
}
export default Protected