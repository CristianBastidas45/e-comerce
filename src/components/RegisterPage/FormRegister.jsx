import { useForm } from "react-hook-form"
import useAuth from "../../hooks/useAuth"
import './styles/FormRegister.css'
import { useNavigate } from "react-router-dom"


const FormRegister = () => {

    const { register, handleSubmit, reset } = useForm()

    const { registerUser } = useAuth()
    const navigate = useNavigate()

    const submit = data => {
        const {firstName, lastName, email, password, phone} = data
        if(firstName && lastName && email && password && phone){
            registerUser(data);
            reset({
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                phone: ''
            })
            navigate('/login')
        }
    }

    return (
        <div className="register-container">
            <h3 className="register__title">Welcome! Please create your acount </h3>
            <form className="register__form" onSubmit={handleSubmit(submit)}>
                <label className="register__form__label">
                    <span className="resgister__form__label__span">First name</span>
                    <input className="resgister__form__label__input" {...register('firstName')} type="text" />
                </label>
                <label className="register__form__label">
                    <span className="resgister__form__label__span">Last name</span>
                    <input className="resgister__form__label__input" {...register('lastName')} type="text" />
                </label>
                <label className="register__form__label">
                    <span className="resgister__form__label__span">email</span>
                    <input className="resgister__form__label__input" {...register('email')} type="email" />
                </label>
                <label className="register__form__label">
                    <span className="resgister__form__label__span">Password</span>
                    <input className="resgister__form__label__input" {...register('password')} type="password" />
                </label>
                <label className="register__form__label">
                    <span className="resgister__form__label__span">Phone</span>
                    <input className="resgister__form__label__input" {...register('phone')} type="text" />
                </label>
                <button className="register__form__btn">Register</button>
            </form>
        </div>
    )
}

export default FormRegister