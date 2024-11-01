'use client'
import { use, useEffect, useState } from "react";
import InputPass from "../components/form/InputPass/inputPass";
import InputText from "../components/form/InputText/inputText";
import SubmitBtn from "../components/form/SubmitBtn/submitBtn";
import { handler } from "../axios/axios";
import User from "../types/user";
export default function Page() {

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('')
  const [user, setUser] = useState<User | null>(null)

  const handleEmailChange = (event : React.ChangeEvent<HTMLInputElement>) =>
  {
    setUserEmail(event.target.value)
  }a
  
  const handlePasswordChange = (event : React.ChangeEvent<HTMLInputElement>) =>
  {
    setUserPassword(event.target.value)
  }

  const handleLogin = async (event: React.FormEvent) =>
  {
    event.preventDefault()
    try{
      const response = await handler.post('/get_user_by_email_password', {email:userEmail, password: userPassword})
      const {email, id, name, password} = response.data
      const user = new User(name,password,id,email)
      setUser(user)
      console.log(user)
      window.localStorage.setItem('user', JSON.stringify(user))
      console.log(window.localStorage.getItem('user'))

    }catch(error:any)
    {
      console.error(error)
    }

  }

  return (
    <div className="w-full h-screen flex flex-col">
      <div className="flex justify-center items-center flex-grow">
        <form onSubmit={handleLogin} className="flex flex-col space-y-5 w-[50%] h-4/5 items-center justify-center shadow-md rounded-lg backdrop-blur-md">
          <h1 className="text-white text-[2.0em]">Login</h1>
          <InputText text="Insira o seu email" eventChange={handleEmailChange}/>
          <InputPass text="Insira a sua senha" changeEvent={handlePasswordChange}/>
          <SubmitBtn text="Entrar" />
        </form>
      </div>
    </div>
  );
}
