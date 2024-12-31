"use client";

import Card from "../components/Card/Card";
import { getActualUser } from "../commons/commons";
import { useEffect, useState } from "react";
import { Exercices } from "../types/exercices";
import { User } from "../types/user";
import { handler } from "../axios/axios";

export default function Home() {
  const [user, setUser] = useState<User | null>(null);
  const [userExercices, setUserExercices] = useState<Exercices[] | null>(null);

  const getUserExercices = async () => {
    try {
      const { data: exercicesData } = await handler.get(
        `/get_user_exercices/${user?._id}`
      );
      console.log(exercicesData);
      setUserExercices(exercicesData);
    } catch (error) {
      console.log(`erro fetching user exercices ${error}`);
    }
  };

  useEffect(() => {
    const fetchedUser = getActualUser();
    setUser(fetchedUser);
  }, []);

  useEffect(() => {
    if (user) {
      getUserExercices();
    }
  }, [user]);
  
  // Função para filtrar exercícios com base no dia
  const filterExercicesByDay = (day: string) => {
    return userExercices?.filter((exercice) => exercice.days === day) || [];
  };

  return (
    <div className="w-full h-full flex justify-center items-center lg:h-screen">
      <div className="w-full h-[80%] flex flex-col justify-center items-center sm:flex-col md:flex-col lg:flex-row xl:flex-row">
        <Card 
            day="Domingo" 
            exercices={filterExercicesByDay("Domingo")} 
        />
        <Card
          day="Segunda-Feira"
          exercices={filterExercicesByDay("Segunda-Feira")}
        />
        <Card
          day="Terça-Feira"
          exercices={filterExercicesByDay("Terça-Feira")}
        />
        <Card
          day="Quarta-Feira"
          exercices={filterExercicesByDay("Quarta-Feira")}
        />
        <Card
          day="Quinta-Feira"
          exercices={filterExercicesByDay("Quinta-Feira")}
        />
        <Card
          day="Sexta-Feira"
          exercices={filterExercicesByDay("Sexta-Feira")}
        />
        <Card day="Sábado" exercices={filterExercicesByDay("Sábado")} />
      </div>
    </div>
  );
}
