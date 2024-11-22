"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import User from "@/app/types/user";
import { getActualUser } from "@/app/commons/commons";
import Dropdown from "../dropdown/page";

export default function Header() {
  const [user, setUser] = useState<User | null>(null);
  const [itensVisibility, setItensVisibility] = useState<boolean>(true)
  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentUser = getActualUser();
      if (currentUser) {
        setUser(currentUser);
        setItensVisibility(false)
        clearInterval(intervalId);
      }
      console.log(user);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <header className="flex z-10 justify-between bg-transparent shadow-md rounded-2xl backdrop-blur-lg w-full p-4 ">
      <p className="text-white text-2xl ml-4">
        Warrior<b>Z</b>
      </p>
      <ul className="flex items-center justify-center flex-wrap overflow-auto">
        {itensVisibility && 
        <>
        <li className="mr-4">
          <Link href="/login" className="text-white">
            Login
          </Link>
        </li>

        <li className="mr-4">
          <Link href="/singup" className="text-white">
            Cadastrar-se
          </Link>
        </li>
        </>
          }
        <li className="mr-4">
          <p className="text-white">Novo exercício</p>
        </li>
        <li className="mr-4">
          <Link href="/home" className="text-white">
            Home
          </Link>
        </li>
        {user ? (
          <li className="mr-4">
            <Dropdown user={user} />
          </li>
        ) : (
          <li className="mr-4">
            <p className="text-white"></p>
          </li>
        )}
      </ul>
    </header>
  );
}
