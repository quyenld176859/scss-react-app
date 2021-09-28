import React from 'react'
import { useSelector } from 'react-redux'

export default function LearnRedux() {
    const user = useSelector((state) => state.userReducer.value)
    return (
        <div className="content-data">
            <h3>Profile card</h3>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>


        </div>
    )
}
