interface PropsTypes 
{
  changeEvent ?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function InputPass({changeEvent} : PropsTypes) {
    return (
      <input type="password" placeholder="Insira sua senha" onChange={changeEvent} className=" w-full  md:w-1/2 lg:w-1/3 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:border-blue-500" /> 
    );
  }
  