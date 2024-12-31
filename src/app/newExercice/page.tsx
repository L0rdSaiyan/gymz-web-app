"use client"
import { useState } from "react";
import InputNumber from "../components/form/InputNumber/InputNumber";
import InputText from "../components/form/InputText/inputText";
import SubmitBtn from "../components/form/SubmitBtn/submitBtn";
import { Exercices } from "../types/exercices";
import Select from "../components/select/Select";
export default function newExercice()
{

    const [newExercice, setNewExercice] = useState<Exercices | null>()
    const [exerciceName, setExerciceName] = useState<String | null>();
    const [exerciceSeries, setExerciceSeries] = useState<number | null>();
    const [exerciceRepeats, setExerciceRepeats] = useState<number | null>();
    const daysOfTheWeek = [
        { value: "monday", label: "Segunda-feira" },
        { value: "tuesday", label: "Terça-feira" },
        { value: "wednesday", label: "Quarta-feira" },
        { value: "thursday", label: "Quinta-feira" },
        { value: "friday", label: "Sexta-feira" },
        { value: "saturday", label: "Sábado" },
        { value: "sunday", label: "Domingo" }
    ];
    

    const handleExerciceNameChange = (event : React.ChangeEvent<HTMLInputElement>) =>
    {
        setExerciceName(event.target.value)
        console.log(exerciceName)
    }

    const handleExerciceSeriesChange = (event : React.ChangeEvent<HTMLInputElement>) =>
    {
        setExerciceSeries(Number(event.target.value))
        console.log(exerciceSeries)

    }

    const handleExercicesRepeatsChange = (event : React.ChangeEvent<HTMLInputElement>) =>
    {
        setExerciceRepeats(Number(event.target.value))
        console.log(exerciceRepeats)

    }

   const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        console.log(event.target.value); 
    };

    return(
        <div className="w-full h-screen flex flex-col">
            <div className="flex justify-center items-center flex-grow">
                <form className="flex flex-col space-y-5 w-[50%] h-4/5 items-center justify-center shadow-md rounded-lg backdrop-blur-md">
                    <h1 className="text-white text-[2.0em]">Novo exercício</h1>
                    <InputText text="Nome do exercício" eventChange={handleExerciceNameChange}></InputText>
                    <div className="flex justify-center items-center" >
                        <InputNumber text="séries" eventChange={handleExerciceSeriesChange}></InputNumber>
                        <span className="mx-5">X</span>
                        <InputNumber text="repetições" eventChange={handleExercicesRepeatsChange}></InputNumber>
                    </div>
                    <Select labelTittle="Dias da Semana para praticar" multipleAllowed={false} options={daysOfTheWeek} eventChange={handleSelectChange}></Select>

                    <SubmitBtn text="Criar"></SubmitBtn>
                </form>
            </div>
        </div>
    )
}