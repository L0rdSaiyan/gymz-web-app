"use client"
import { useState, useEffect } from "react";
import {User} from "@/app/types/user";
import { getActualUser } from "@/app/commons/commons";
interface ProfileParams {
    params: {
      profileId: string;
    };
  }
  
  export default function Profile({ params }: ProfileParams) {

    const [user,setUser] = useState<User | null>(null)  

    useEffect(() =>
    {
      setUser(getActualUser)
    },[])

    return (
      <>
        <span>Bem vindo, {user?._name}</span>
      </>
    );
  }
  