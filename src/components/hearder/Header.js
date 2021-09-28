import React from 'react'
import Login from './login/Login'

export default function Header() {
    function btn_choice_id(id) {
        console.log(id)
    }
    return (
        <>

            <div className="header">

                <button className="btn_choice">
                    <span>Click me</span>
                    <div className="dropdownlist">
                        <div onClick={() => btn_choice_id(1)}>Lựa chọn 1</div>
                        <div onClick={() => btn_choice_id(2)}>Lựa chọn 2</div>
                        <div onClick={() => btn_choice_id(3)}>Lựa chọn 3</div>
                    </div>
                </button>

                <Login></Login>
            </div>

        </>
    )
}
