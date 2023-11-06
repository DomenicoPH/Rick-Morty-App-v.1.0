import { useState } from 'react';
import styles from './Form.module.css';
import rmlogo from '../../assets/img/rmlogo.png'
import { validation } from './validation';

function Form({ login }){
    const [userData, setUserData] = useState({
        email:'',
        password:'',
    })
    const [errors, setErrors] = useState({})

    function handleChange(evento){
        setErrors(validation({...userData, [evento.target.name]:evento.target.value}))
        setUserData({...userData, [evento.target.name]:evento.target.value})
    }

    const handleSubmit = (evento) =>{
        evento.preventDefault()
        login(userData)
    }

    return <div className={styles.container}>
        <img src={rmlogo} alt="Logo Rick & Morty" />
        <form onSubmit={handleSubmit}>
            <div className={styles.inputContainer}>
                <label htmlFor="email">Email:</label>
                <input 
                    type="text"
                    placeholder='"test@test.com"'
                    id='email'
                    name='email'
                    value={userData.email}
                    onChange={handleChange}
                    className={errors.email && styles.warning}
                    />
            </div>

            { errors.email && (<p className={styles.error}>{errors.email}</p>) }

            <div className={styles.inputContainer}>
                <label htmlFor="password">Password:</label>
                <input 
                    type="password"
                    placeholder='123456'
                    id='password'
                    name='password'
                    value={userData.password}
                    onChange={handleChange}
                    className={errors.password && styles.warning}
                    />
            </div>

            { errors.password && <p className={styles.error}>{errors.password}</p> }
            <div className={styles.botonContainer}>
                <button>Login</button>
            </div>
        </form>
    </div>
}

export default Form;