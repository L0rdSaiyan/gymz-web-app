interface PropsTypes 
{
    text : string
}

export default function SubmitBtn({text} : PropsTypes)
{
    return(
        <>
            <input type="submit" value={text} className="flex hover:cursor-pointer hover:scale-105 transition-[100ms] w-[80%] md:w-1/2 lg:w-1/3 bg-gray-200 h-[2.5em] rounded-[8px]"/> 
        </>
    )
}