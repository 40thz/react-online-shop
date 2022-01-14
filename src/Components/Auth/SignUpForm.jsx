import React from 'react'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { SET_USER } from '../../store/actions'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const registrationUser = (e) => {
        e.preventDefault()
        const auth = getAuth();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const repassword = e.target.repassword.value;
            if(password === repassword){
                createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    dispatch(SET_USER({
                        email: userCredential.user.email,
                        id: userCredential.user.uid,
                        token: userCredential.user.accessToken
                    }))
                    navigate('/')
                })
                .catch((error) => {
                    console.log(error)
                });
            }else{
                return
            }
        }
    

    return (
        <form onSubmit={registrationUser} className='signIn'>
            <div className="title">
                Регистрация
            </div>
            <label>
                Электронная почта
                <input type="email" name='email' />
            </label>
            <label>
                Пароль
                <input type="password" minLength={6} name="password" />
            </label>
            <label>
                Павторите пароль
                <input type="password" name="repassword" />
            </label>
            <input type="submit" value='Зарегистрироваться' />
        </form>
    )
}

export default SignUp
