import AuthWrapper from "../components/wrapper";
import AuthLoginForm from "./components/form";

const PatitasLoginPage = () => {
  return (
    <AuthWrapper image="/auth/register.webp" alt="Login">
      <AuthLoginForm />
    </AuthWrapper>
  );
};

export default PatitasLoginPage;
