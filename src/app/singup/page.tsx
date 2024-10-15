"use client";
import { handler } from '../axios/axios';
import { swalAlert } from '../commons/commons';
import Footer from "../components/Footer/footer";
import InputPass from "../components/form/InputPass/inputPass";
import InputText from "../components/form/InputText/inputText";
import SubmitBtn from "../components/form/SubmitBtn/submitBtn";
import { useEffect, useState } from "react";
import InputEmail from '../components/inputEmail/InputEmail';

export default function Signup() {
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPass, setConfirmPass] = useState<string>('');
  const [email, setEmail] = useState<string>('')

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handlePassChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleConfirmPassChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPass(event.target.value);
  };

  const handleEmailChange = (event : React.ChangeEvent<HTMLInputElement>) => 
  {
    setEmail(event.target.value)
  }

  useEffect(() =>
  {
    console.log(email)
  },[email])

  const signup = async (event: React.FormEvent) => {
    event.preventDefault();

    if (password !== confirmPass) {
      swalAlert("Erro", "As senhas não conferem!", 'error');
      return;
    }

    swalAlert("Criando usuário", 'Por favor, aguarde', 'info')

    console.log('Sending user data:', {
      name,
      password,
      email
    });

    try {
      const response = await handler.post('/create_user', {
        name,
        password,
        email
      });
      swalAlert("Sucesso", "Usuário criado com sucesso", 'success');
    } catch (error: any) {
      console.error('Error response:', error.response);
      swalAlert("Erro", error.response?.data?.error || 'Erro desconhecido', 'error');
    }
  };

  return (
    <div className="w-full h-screen flex flex-col">
      <div className="flex justify-center items-center flex-grow">
        <form onSubmit={signup} className="flex flex-col space-y-5 w-[50%] h-4/5 items-center justify-center shadow-md rounded-lg backdrop-blur-md">
          <h1 className="text-white text-[2.0em]">Crie sua conta</h1>
          <InputText text="Insira seu nome de usuário" eventChange={handleNameChange} />
          <InputEmail changeEvent={handleEmailChange}></InputEmail>
          <InputPass text="Crie uma senha" changeEvent={handlePassChange} />
          <InputPass text="Confirme sua senha" changeEvent={handleConfirmPassChange} />
          {confirmPass !== password && <h1 className="text-red-500">As senhas não conferem!</h1>}
          <SubmitBtn text='Cadastre-se' />
        </form>
      </div>
    </div>
  );
}
