import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getUserInfo, clearUserData } from '../../../store/userData'


export default function Login() {
    const dispatch = useDispatch()
    const [islogin, setIsLogin] = useState(true)
    function clickLogin() {

        dispatch(getUserInfo({ name: "Lê Đình Quyền", age: 21, email: "quyenld9699@gmail.com" }))
        setIsLogin(false)
    }
    function clickLogOut() {
        dispatch(clearUserData())
        setIsLogin(true)
    }
    if (islogin === true)
        return (
            <div
                className="btn_neon btn_neon_blue"
                style={{ float: 'right' }}
                onClick={clickLogin}
            >
                <span>Login</span>
            </div>
        )
    else {
        return (
            <div
                className="btn_neon btn_neon_red"
                style={{ float: 'right' }}
                onClick={clickLogOut}
            >
                <span>Log out</span>
            </div>
        )
    }
}
