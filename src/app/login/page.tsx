'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import InputPass from "../components/form/InputPass/inputPass";
import InputText from "../components/form/InputText/inputText";
import SubmitBtn from "../components/form/SubmitBtn/submitBtn";
import { handler } from "../axios/axios";
import User from "../types/user";
import { loginUser, swalAlert, redirect } from "../commons/commons";
import InputEmail from "../components/inputEmail/InputEmail";
import Link from "next/link";

export default function Page() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  const handleEmailChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setUserEmail(event.target.value);
  };

  const handlePasswordChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setUserPassword(event.target.value);
  };

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    swalAlert("Buscando usuário...", "Por favor, aguarde.", "info");
    try {
      const response = await handler.post('/get_user_by_email_password', { email: userEmail, password: userPassword });
      const { email, id, name, password } = response.data;
      const exercicesResponse = await handler.get(`/get_user_exercices/1`);
      const data = exercicesResponse.data;
      console.log(data);
      const returnedUser = new User(name, password, id, email);
      setUser(returnedUser);
      loginUser(returnedUser);
      swalAlert(`Bem vindo, ${returnedUser._name}!`, "Login realizado", "success");
      setTimeout(() => {
        router.push('/home');
      }, 3000);
    } catch (error: any) {
      swalAlert("error", "Usuário não encontrado!", "error");
      console.error(error);
    }
  };

  return (
    <div className="w-full h-screen flex flex-col">
      <div className="flex justify-center items-center flex-grow">
        <form onSubmit={handleLogin} className="flex flex-col space-y-5 w-[50%] h-4/5 items-center justify-center shadow-md rounded-lg backdrop-blur-md">
          <h1 className="text-white text-[2.0em]">Login</h1>
          <InputEmail changeEvent={handleEmailChange} />
          <InputPass text="Insira a sua senha" changeEvent={handlePasswordChange} />
          <SubmitBtn text="Entrar" />
        </form>
      </div>
    </div>
  );
}
