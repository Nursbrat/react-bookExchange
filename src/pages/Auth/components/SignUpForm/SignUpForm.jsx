import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../SignUpForm/SignUpForm.scss'
import images from '../../../../constants/images';

const SignUpForm = () => {
    const [password,setPassword]=useState()
    const togglePassword=(e)=>{
        setPassword(e.value)
    }
    return (
        <div className='signup'>

            <div className="signup__content">
                <form>
                    <input type="text" placeholder="Имя" required />
                    <input type="email" placeholder="Введите эл. почту" required />
                    <input type="password" placeholder="Пароль" required value={password} onChange={togglePassword} />
                   
                    <div className="signup__divider">
                        <p>Или</p>
                    </div>

                    <div className="signup__img">
                        <img src={images.google} alt="" />
                    </div>


                    <button type="submit">Войти</button>
                </form>
            </div>


        </div>
    );
}

export default SignUpForm
