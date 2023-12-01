import FormLogin from "../components/LoginPage/FormLogin"
import CardLogeado from "../components/shared/CardLogeado"

const LoginPage = () => {
  return (
    <div>
      {
        localStorage.getItem('name')?(
          <CardLogeado />
        ):(
          <FormLogin />
        )
      }
    </div>
  )
}

export default LoginPage