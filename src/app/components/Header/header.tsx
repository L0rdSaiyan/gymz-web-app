export default function Header()
{
    return (
        <header className="flex justify-between bg-transparent shadow-md rounded-2xl backdrop-blur-lg absolute top-0 w-full p-4">
          <p className="text-white text-2xl ml-4">GymZ 🏋️‍♂️</p>

            <ul className="flex items-center justify-center flex-wrap overflow-auto">
              <li className="mr-4">
                <p>Login</p>
              </li>
              <li className="mr-4">
                <p>Cadastrar-se</p>
              </li>
              <li className="mr-4">
               <p>novo exercício</p>
              </li>
              <li className="mr-4">
                <p>home</p>
              </li>
            </ul>
          
        </header>
      );
}


