import Link from "next/link"

export default function Header()
{
    return (
        <header className="flex justify-between bg-transparent shadow-md rounded-2xl backdrop-blur-lg absolute top-0 w-full p-4">
          <p className="text-white text-2xl ml-4">Warrior<b>Z</b></p>

            <ul className="flex items-center justify-center flex-wrap overflow-auto">
              <li className="mr-4">
                <Link href="/login" className="text-white">Login</Link>
              </li>
              <li className="mr-4">
                <Link href="/singup" className="text-white">Cadastrar-se</Link>  
              </li>
              <li className="mr-4">
               <p className="text-white">novo exercício</p>
              </li>
              <li className="mr-4">
                <p className="text-white">home</p>
              </li>
            </ul>
          
        </header>
      );
}
