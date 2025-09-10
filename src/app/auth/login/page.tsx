import AuthWrapper from "../components/wrapper";
import AuthLoginForm from "./components/form";

const PatitasLoginPage = () => {
  return (
    <AuthWrapper
      image="/auth/login.webp"
      alt="Un perro de color marrón rojizo, corre con entusiasmo en la orilla de una playa, con la boca abierta y la lengua fuera."
    >
      <AuthLoginForm />
    </AuthWrapper>
  );
};

export default PatitasLoginPage;
