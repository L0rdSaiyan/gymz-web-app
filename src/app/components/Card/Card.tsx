"use client";

import { useState, useEffect } from "react";
import NewExercicePopUp from "../Popups/NewExercicePopUp/NewExercicePopUp";
import { Exercices } from "@/app/types/exercices";
import { handler } from "@/app/axios/axios";
import { redirect, swalAlert } from "@/app/commons/commons";

interface PropsType {
  day: string;
  exercices?: Exercices[] | null;
}

export default function Card({ day, exercices }: PropsType) {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    if (exercices) {
      setLoading()
    }
  }, [exercices]);

  const setLoading = () =>
  {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000);
  }

  const createNewExercice = () => {
    setIsPopUpOpen(true);
  };

  const closePopUp = () => {
    setIsPopUpOpen(false);
  };

  const handleOutsideClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      closePopUp();
    }
  };

  const handleDeleteExercice = async (exercice: Exercices) => {
    try {
      const { data: exerciceData } = await handler.delete(
        `/delete_exercice/${exercice.exercice_id}`
      );
      swalAlert(
        "Sucesso!",
        `Exercício ${exercice.name} deletado com sucesso.`,
        "success"
      );
      setTimeout(() => {
        redirect("/home");
      }, 1500);
    } catch (error) {
      swalAlert(
        "Erro",
        `Um erro ocorreu e não foi possível excluir o exercício ${exercice.name}`,
        "error"
      );
    }
  };

  return (
    <>
      <div className="w-[30%] text-white rounded-xl h-[50%] m-5 flex flex-col duration-200 hover:shadow-[0px_0px_10px_white] bg-transparent backdrop-blur-md shadow-[0px_0px_4px_white] z-10">
        <div className="flex p-2 justify-center">
          <h1 className="text-lg">{day}</h1>
        </div>
        <hr />
        <div className="flex flex-col items-center justify-center h-full overflow-y-auto text-wrap">
          {isLoading ? (
            <p className="p-5">Carregando exercícios...</p> 
          ) : Array.isArray(exercices) && exercices.length > 0 ? (
            exercices.map((exercice, index) => (
              <ul key={index} className="flex items-center">
                <li className="p-1 border-b-white border-b-2 flex flex-col items-center m-5">
                  <span className="text-[1.2em]">{exercice.name} </span>
                  <span>
                    {exercice.repeats} X {exercice.series}
                  </span>
                </li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 hover:scale-[1.1] cursor-pointer transition-[200ms] hover:fill-red-700"
                  onClick={() => handleDeleteExercice(exercice)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </ul>
            ))
          ) : (
            <>
              <p className="p-5">
                Poxa, sem nenhum exercício por aqui, comece criando um!
              </p>
              <div className="rounded-full hidden bg-transparent backdrop-blur-md shadow-[0px_0px_4px_white] w-[50px] h-[50px] absolute top-[70%] lg:flex justify-center items-center transition-200ms animate-bounce">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                  />
                </svg>
              </div>
            </>
          )}
        </div>
        <button
          onClick={createNewExercice}
          className="bg-black m-2 rounded-md transition-transform duration-200 cursor-pointer hover:scale-105"
        >
          Novo exercício
        </button>
      </div>

      {isPopUpOpen && (
        <div
          className={`fixed inset-0 flex justify-center items-center bg-opacity-50 z-20 backdrop-blur-sm ${
            isPopUpOpen ? "animate-fadeIn" : "animate-fadeOut"
          }`}
          onClick={handleOutsideClick}
        >
          <div
            className="relative p-5 bg-opacity-50 z-20 backdrop-blur-sm rounded-lg w-[80%] sm:w-[50%] transform transition-all duration-300 scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closePopUp}
              className="absolute top-10 right-2 text-black"
            >
              X
            </button>
            <NewExercicePopUp day={day} />
          </div>
        </div>
      )}
    </>
  );
}

Card.defaultProps = {
  exercices: [],
};
