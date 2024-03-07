import { Link } from "react-router-dom"
import React from 'react'
import { useSelector } from 'react-redux'

function UpdateProfilePage() {
    const { userInfo } = useSelector((state) => state.auth)

    return (
        <div>
        <h1 className="main__title" >Create Team</h1>
        <form className="auth__form">

          <button className="btn btn-primary" type="submit">Create Team</button>
        </form>
      </div>
    )
}

export default UpdateProfilePage
