interface PropsTypes
{
    day : string,
    exercices: string
}


export default function Cards({day, exercices} : PropsTypes)
{
    return(
        <>
            <div className="w-[14%] bg-transparent flex flex-col items-center, justify-center shadow-md backdrop-blur-lg">
            {day}
                <div className="flex flex-col items-center justify-center">
                    {exercices}
                </div>
            </div>
        </>
    )

}

