"use client"
import Footer from "../components/Footer/footer";
import InputPass from "../components/form/InputPass/inputPass";
import InputText from "../components/form/InputText/inputText";
import SubmitBtn from "../components/form/SubmitBtn/submitBtn";
import { useState } from "react";

export default function Singup() {

  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [confirmPass, setConfirmPass] = useState<string>();

  const handleUserNameChange = (event : React.ChangeEvent<HTMLInputElement>) =>
  {
    setUsername(event.target.value)
    console.log(username)
  }

  const handlePassChange = (event: React.ChangeEvent<HTMLInputElement>) =>
  {
    setPassword(event?.target.value)
    console.log(password)
  }

  const handleConfirmPassChange = (event: React.ChangeEvent<HTMLInputElement>) =>
  {
    setConfirmPass(event.target.value)
  }

  const handleConfirmPass = () =>
  {

  }

  return (
    <div className="w-full h-screen flex flex-col">
    <div className="flex justify-center items-center flex-grow">
      <form className="flex flex-col space-y-5 w-[50%] h-4/5 items-center justify-center shadow-md rounded-lg backdrop-blur-md">
        <h1 className="bottom-[100px] text-white text-[2.0em] font-">Crie sua conta </h1>
        <InputText text="Insira seu nome de usuário" eventChange={handleUserNameChange}/>
        <InputPass changeEvent={handlePassChange} />
        <InputPass changeEvent={handleConfirmPassChange} />
        {
          confirmPass !== password && <h1 className="text-red-500">As senhas não conferem!</h1>
        }
        <SubmitBtn />
      </form>
    </div>
  </div>
  );
}
