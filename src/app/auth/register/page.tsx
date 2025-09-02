import AuthWrapper from "../components/wrapper";
import AuthRegisterForm from "./components/form";

const PatitasRegisterPage = () => {
  return (
    <AuthWrapper image="/auth/register.webp" alt="Registrate">
      <AuthRegisterForm />
    </AuthWrapper>
  );
};

export default PatitasRegisterPage;
