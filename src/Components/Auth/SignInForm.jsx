import React from 'react'
import { Link } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { SET_USER } from '../../store/actions'

const SignIn = () => {
    const dispatch = useDispatch()

    const loginUser = (e) => {
        e.preventDefault()
        const auth = getAuth();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                dispatch(SET_USER({
                    email: userCredential.user.email,
                    id: userCredential.user.uid,
                    token: userCredential.user.accessToken
                }))

            })
            .catch((error) => {
                console.log(error)
            });
    }

    return (
        <form onSubmit={loginUser} className='signIn'>
            <div className="title">
                Вход
            </div>
            <label>
                Электронная почта
                <input type="email" name='email' />
            </label>
            <label>
                Пароль
                <input type="password" name='password' />
            </label>
            <div style={{ display: 'flex' }}>
                <input type="submit" value='Войти' />
                <Link to='/auth/signup'>
                    <input type="button" value='Зарегистрироваться' />
                </Link>
            </div>
        </form>
    )
}

export default SignIn
