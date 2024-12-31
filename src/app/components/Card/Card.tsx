"use client";

import { useState } from "react";
import NewExercicePopUp from "../Popups/NewExercicePopUp/NewExercicePopUp";
import { Exercices } from "@/app/types/exercices";

interface PropsType {
  day: string;
  exercices?: Exercices[] | null;
}

export default function Card({ day, exercices }: PropsType) {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

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

  return (
    <>
      <div className="w-full sm:w-[50%]  text-white rounded-xl h-[50%] m-5 flex flex-col duration-200 hover:shadow-[0px_0px_10px_white] bg-transparent backdrop-blur-md shadow-[0px_0px_4px_white] z-10">
        <div className="flex p-2 justify-center absolute ">
          <h1 className="text-lg">{day}</h1>
        </div>
        <hr />
        <div className="flex flex-col items-center justify-center h-full overflow-y-auto text-wrap">
          {Array.isArray(exercices) && exercices.length > 0 ? (
            exercices.map((exercice, index) => (
              <ul key={index}>
                <li className="p-1">
                  {exercice.name}: {exercice.repeats} X {exercice.series}
                </li>
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
