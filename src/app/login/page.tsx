import InputPass from "../components/form/InputPass/inputPass";
import InputText from "../components/form/InputText/inputText";
import SubmitBtn from "../components/form/SubmitBtn/submitBtn";

export default function Page() {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="flex justify-center items-center flex-grow">
        <form className="flex flex-col space-y-5 w-[50%] h-4/5 items-center justify-center shadow-md rounded-lg backdrop-blur-md">
          <h1 className="text-white text-[2.0em]">Login</h1>
          <InputText text="Insira o seu nome de usuário"/>
          <InputPass text="Insira a sua senha"/>
          <SubmitBtn text="Entrar"/>
        </form>
      </div>
    </div>
  );
}
