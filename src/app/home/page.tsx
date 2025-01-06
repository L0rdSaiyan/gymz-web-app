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

  const filterExercicesByDay = (day: string) => {
    return userExercices?.filter((exercice) => exercice.days === day) || [];
  };

  return (
    <div className="w-full h-full flex lg:h-screen">
      <div className="w-full h-[12%] lg:h-[100%] justify-center overflow-auto flex flex-wrap">
        <Card day="Domingo" exercices={filterExercicesByDay("Domingo")} />
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
