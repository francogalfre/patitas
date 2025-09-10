import AuthWrapper from "../components/wrapper";
import AuthRegisterForm from "./components/form";

const PatitasRegisterPage = () => {
  return (
    <AuthWrapper
      image="/auth/register.webp"
      alt="Un niño abrazando a su perro de raza Golden, que está acostado en el césped"
    >
      <AuthRegisterForm />
    </AuthWrapper>
  );
};

export default PatitasRegisterPage;
