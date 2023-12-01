import FormRegister from "../components/RegisterPage/FormRegister";
import CardLogeado from "../components/shared/CardLogeado";

const RegisterPage = () => {
  return (
    <div>
      {
        localStorage.getItem('name') ? (
          <CardLogeado />
        ) : (
          <FormRegister />
        )
      }
    </div>
  );
};

export default RegisterPage