interface inputEmailProps
{
    changeEvent : (event:React.ChangeEvent<HTMLInputElement>) => void
}

export default function InputEmail({changeEvent} : inputEmailProps)
{
    return(
        <>
            <input type="email" onChange={changeEvent} placeholder="Insira seu email" className="w-full  md:w-1/2 lg:w-1/3 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"></input>
        </>
    )
}