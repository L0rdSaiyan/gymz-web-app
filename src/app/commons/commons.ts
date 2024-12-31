import {User} from "../types/user";
import { Exercices } from "../types/exercices";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

interface swalAlertAtt {
    icon: 'success' | 'error' | 'warning' | 'info' | 'question'; 
}

export const swalAlert = async (
    title: string,
    text: string,
    icon: swalAlertAtt["icon"]
  ) => {
    const result = await Swal.fire({
      title: title,
      text: text,
      icon: icon,
      confirmButtonText: "OK",
    });
  
    return result.isConfirmed; 
  };

export const redirect = (place : string) =>
{
    window.location.href = place
}

export const loginUser = (user : User) => {

    window.localStorage.setItem('user', JSON.stringify(user))
    return user

}

export const getActualUser = () =>
{
    const userData =  window.localStorage.getItem('user')
    console.log(userData)
    if(!userData)
    {
        return null
    }
    try {
        const parsedUser = JSON.parse(userData);

        return new User(parsedUser._name, parsedUser._password, parsedUser._id, parsedUser._email, parsedUser._exercices);
        
    } catch (error) {
        console.error('Erro ao parsear o usuário:', error);
        return null; 
    }
  
}

export const logout = async () => {
    const userConfirmed = await swalAlert("Confirmação", "Deseja mesmo sair?", "info");
  
    if (userConfirmed) {
      window.localStorage.clear();
      swalAlert("Sucesso","Você foi deslogado.", "success")
      redirect('/login')
      console.log("Usuário deslogado");
    } else {
      console.log("Logout cancelado");
    }
  };
  