import { useForm } from "react-hook-form"
import useAuth from "../../hooks/useAuth"
import '../RegisterPage/styles/FormRegister.css'

const FormLogin = () => {

    const { register, handleSubmit, reset } = useForm()

    const { loginUser } = useAuth()

    const submit = data => {
        loginUser(data)
        setTimeout(()=>{
            window.location.reload(true);
        },2500 )
    }

    return (
        <div className="register-container">
            <h3 className="register__title">Welcome! Please create your acount </h3>
            <form className="register__form" onSubmit={handleSubmit(submit)}>
                <label className="register__form__label">
                    <span className="resgister__form__label__span">Email</span>
                    <input className="resgister__form__label__input" {...register('email')} type="text" />
                </label>
                <label className="register__form__label">
                    <span className="resgister__form__label__span">Password</span>
                    <input className="resgister__form__label__input" {...register('password')} type="password" />
                </label>
                <button className="register__form__btn">Login</button>
            </form>
        </div>
    )
}

export default FormLogin