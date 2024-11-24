interface PropsType {
  day: string;
}

export default function Card({ day }: PropsType) {
  return (
    <>
      <div className="w-full sm:w-[50%] text-white rounded-xl h-[50%] m-5 flex flex-col hover:scale-105 transition-transform duration-200 cursor-pointer bg-transparent backdrop-blur-md shadow-[0px_0px_4px_white] z-10"> {/* Adiciona z-10 */}
        <div className="flex p-2 justify-center">
          <h1 className="text-lg">{day}</h1>
        </div>
        <hr />
        <div className="flex flex-col items-center justify-center h-full">
          <span>treino 1</span>
          <span>treino 2</span>
          <span>treino 3</span>
        </div>
      </div>
    </>
  );
}
