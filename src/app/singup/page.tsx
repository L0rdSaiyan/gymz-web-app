"use client";
import { handler } from '../axios/axios';
import { swalAlert } from '../commons/commons';
import Footer from "../components/Footer/footer";
import InputPass from "../components/form/InputPass/inputPass";
import InputText from "../components/form/InputText/inputText";
import SubmitBtn from "../components/form/SubmitBtn/submitBtn";
import { useEffect, useState } from "react";
import InputEmail from '../components/form/inputEmail/InputEmail';
import {User} from '../types/user';
import { loginUser } from '../commons/commons';

export default function Signup() {
  const [userName, setuserName] = useState<string>('');
  const [userPassword, setuserPassword] = useState<string>('');
  const [confirmPass, setConfirmPass] = useState<string>('');
  const [userEmail, setuserEmail] = useState<string>('')
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
  const script = document.createElement('script');
  script.src = 'https://flexform.my.site.com/ESWBot1733322091417/assets/js/bootstrap.min.js';
  script.onload = () => {
    try {
      (window as any).embeddedservice_bootstrap.settings.language = 'pt_BR';
      (window as any).embeddedservice_bootstrap.init(
        '00DHs000008mOna',
        'Bot',
        'https://flexform.my.site.com/ESWBot1733322091417',
        {
          scrt2URL: 'https://flexform.my.salesforce-scrt.com',
        }
      );
    } catch (err) {
      console.error('Erro ao carregar o bot:', err);
    }
  };
  document.body.appendChild(script);
}, []);
  
  const handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setuserName(event.target.value);
  };

  const handlePassChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setuserPassword(event.target.value);
  };

  const handleConfirmPassChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPass(event.target.value);
  };

  const handleUserEmailChange = (event : React.ChangeEvent<HTMLInputElement>) => 
  {
    setuserEmail(event.target.value)
  }

  useEffect(() =>
  {
    console.log(userEmail)
  },[userEmail])

  const validateUserData = (userName : string, userPassword : string, confirmPass : string, userEmail : string) =>
  {
    if (userPassword !== confirmPass) return "As senhas não conferem"
    return null
  }

  const signup = async (event: React.FormEvent) => {
    event.preventDefault();
  
    const validationMessage = validateUserData(userName, userPassword, confirmPass, userEmail)
    
    if(validationMessage)
    {
      swalAlert('Erro', validationMessage, "error")
      return
    }

    swalAlert("Criando usuário", 'Por favor, aguarde', 'info');
  
    console.log('Sending user data:', {
      userName,
      userPassword,
      userEmail
    });
  
    try {
      const response = await handler.post('/create_user', {
        name: userName,
        password: userPassword,
        email: userEmail
      });
      const { name, password, id, email } = response.data;
      const returnedUser = new User(name, password, id, email);
      setUser(loginUser(returnedUser));
      swalAlert("Sucesso", "Usuário criado com sucesso", 'success');
    } catch (error: any) {
      console.error('Error response:', error.response);
      let errorMesage = error.response?.data?.error;
  
      if (errorMesage?.includes('duplicate key value violates unique constraint "unique_email"')) {
        swalAlert("Erro", `O email (${userEmail}) já foi cadastrado por outro usuário `, 'error');
      }
      else if(errorMesage.includes('duplicate key value violates unique constraint "unique_name"'))
      {
        swalAlert('Erro', `Já existe um usuário chamado ${userName}`, 'error')
      }
      else {
        swalAlert("Erro", errorMesage || 'Erro desconhecido', 'error');
      }
    }
  };
  

  return (
    <div className="w-full h-screen flex flex-col">
      <div className="flex justify-center items-center flex-grow">
        <form onSubmit={signup} className="flex flex-col space-y-5 w-[50%] h-4/5 items-center justify-center shadow-md rounded-lg backdrop-blur-md">
          <h1 className="text-white text-[2.0em]">Crie sua conta</h1>
          <InputText text="Insira seu nome de usuário" eventChange={handleUserNameChange} />
          <InputEmail changeEvent={handleUserEmailChange}></InputEmail>
          <InputPass text="Crie uma senha" changeEvent={handlePassChange} />
          <InputPass text="Confirme sua senha" changeEvent={handleConfirmPassChange} />
          {confirmPass !== userPassword && <h1 className="text-red-500">As senhas não conferem!</h1>}
          <SubmitBtn text='Cadastre-se' />
        </form>
      </div>
      
    </div>
  );
}
