"use client";
import { useEffect, useState } from "react";
import InputNumber from "../../form/InputNumber/InputNumber";
import InputText from "../../form/InputText/inputText";
import SubmitBtn from "../../form/SubmitBtn/submitBtn";
import { Exercices } from "@/app/types/exercices";
import { User } from "@/app/types/user";
import Select from "../../select/Select";
import { handler } from "@/app/axios/axios";
import { redirect, swalAlert } from "@/app/commons/commons";
import { getActualUser } from "@/app/commons/commons";
interface PropsType {
  day: string;
}

export default function NewExercicePopUp({ day }: PropsType) {
  const [exerciceName, setExerciceName] = useState<string | null>(null);
  const [exerciceSeries, setExerciceSeries] = useState<number | null>(null);
  const [exerciceRepeats, setExerciceRepeats] = useState<number | null>(null);
  const [selectedDay, setSelectedDay] = useState<string>(day);
  const [user, setUser] = useState<User | null>();
  // const [newExercice, setNewExercice] = useState<Exercices | null>(null)

  useEffect(() => {
    setUser(getActualUser);
  }, []);

  const daysOfTheWeek = [
    { value: "Segunda-feira", label: "Segunda-Feira" },
    { value: "Terça-Feira", label: "Terça-Feira" },
    { value: "Quarta-Feira", label: "Quarta-Feira" },
    { value: "Quinta-Feira", label: "Quinta-Feira" },
    { value: "Sexta-Feira", label: "Sexta-Feira" },
    { value: "Sábado", label: "Sábado" },
    { value: "Domingo", label: "Domingo" },
  ];

  const handleExerciceNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setExerciceName(event.target.value);
  };

  const handleExerciceSeriesChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setExerciceSeries(Number(event.target.value));
  };

  const handleExercicesRepeatsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setExerciceRepeats(Number(event.target.value));
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDay(event.target.value); // Atualiza o dia selecionado
  };

  const handleExerciceCreation = async (event: React.FormEvent) => {
    event.preventDefault();
    swalAlert("Criando...", "Seu exercício está sendo criado", "info");
    try {
      const { data: newExercice } = await handler.post("/create_exercice", {
        name: exerciceName,
        series: exerciceSeries,
        repeats: exerciceRepeats,
        days: selectedDay,
        userId: user?.id,
      });
      console.log(newExercice);
      swalAlert(
        "sucesso!",
        `Exercício ${exerciceName} criado com sucesso!`,
        "success"
      );
      setTimeout(() => {
        redirect("/home");
      }, 1500);
    } catch (error) {
      console.error(error);
      swalAlert(
        "Erro!",
        `Ocorreu um erro ao criar o exercício ${error}`,
        "error"
      );
    }
  };

  return (
    <div className="w-full h-screen flex flex-col">
      <div className="flex justify-center items-center flex-grow ">
        <form
          onSubmit={handleExerciceCreation}
          className=" flex flex-col space-y-5 w-[100%] h-4/5 items-center justify-center  rounded-lg bg-transparent backdrop-blur-md shadow-[0px_0px_4px_white] "
        >
          <h1 className="text-white text-[2.0em]">Novo exercício</h1>
          <InputText
            text="Nome do exercício"
            eventChange={handleExerciceNameChange}
          />
          <div className="flex justify-center items-center">
            <InputNumber
              text="Repetições"
              eventChange={handleExercicesRepeatsChange}
            />
            <span className="mx-5">X</span>
            <InputNumber
              text="Séries"
              eventChange={handleExerciceSeriesChange}
            />
          </div>
          <Select
            labelTittle="Dia da Semana para praticar"
            multipleAllowed={false}
            defaultValue={selectedDay} // Valor do dia vindo do Card
            options={daysOfTheWeek}
            eventChange={handleSelectChange}
          />
          <SubmitBtn text="Criar" />
        </form>
      </div>
    </div>
  );
}
