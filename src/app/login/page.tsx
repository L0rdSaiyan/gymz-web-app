'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import InputPass from "../components/form/InputPass/inputPass";
import InputText from "../components/form/InputText/inputText";
import SubmitBtn from "../components/form/SubmitBtn/submitBtn";
import { handler } from "../axios/axios";
import {User} from "../types/user";
import { loginUser, swalAlert, redirect, logout } from "../commons/commons";
import InputEmail from "../components/form/inputEmail/InputEmail";
import Link from "next/link";
import { Exercices } from "../types/exercices";

export default function Page() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [user, setUser] = useState<User | null>(null);
  const [userExercices, setUserExercices] = useState<Exercices | null>(null)
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
        const { data: userData } = await handler.post('/get_user_by_email_password', {
            email: userEmail, password: userPassword
        });

        const { data: exercicesData } = await handler.get(`/get_user_exercices/${userData.id}`);

        const exercicesList = exercicesData.map((exercice: any) => new Exercices(
            exercice.exercice_id, exercice.name, exercice.series, exercice.repeats, exercice.days
        ));

        //fazer condicionais para garantir que antes de criar uma instancia do objeto usuário, foi realmente encontrado um usuário 
        //correspondente.
        const returnedUser = new User(
            userData.name, userData.password, userData.id, userData.email, exercicesList
        );

        logout();
        setUser(loginUser(returnedUser));
        
        console.log(exercicesData);
        console.log(exercicesList);
        console.log(returnedUser);

        swalAlert(`Bem vindo, ${returnedUser._name}!`, "Login realizado", "success");

        setTimeout(() => redirect('/home'), 3000);
    } catch (error) {
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
