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
<div className="w-full h-[50%] justify-center overflow-auto flex flex-wrap 
               sm:h-[40%] 
               md:h-[30%] 
              lg:h-[100%] 
               xl:h-[80%] ">
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

<script type='text/javascript'>
	function initEmbeddedMessaging() {
		try {
			embeddedservice_bootstrap.settings.language = 'pt_BR'; // For example, enter 'en' or 'en-US'

			embeddedservice_bootstrap.init(
				'00DHs000008mOna',
				'Bot',
				'https://flexform.my.site.com/ESWBot1733322091417',
				{
					scrt2URL: 'https://flexform.my.salesforce-scrt.com'
				}
			);
		} catch (err) {
			console.error('Error loading Embedded Messaging: ', err);
		}
	};
</script>
<script type='text/javascript' src='https://flexform.my.site.com/ESWBot1733322091417/assets/js/bootstrap.min.js' onload='initEmbeddedMessaging()'></script>

      
    </div>
  );
}
