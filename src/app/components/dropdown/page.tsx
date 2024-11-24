'use client';
import { useEffect, useRef, useState } from "react";
import { logout } from "@/app/commons/commons";
import User from "@/app/types/user";
import Link from "next/link";

interface PageProps {
  user: User;
}

export default function Dropdown({ user }: PageProps) {
  const [isOpen, setIsOpen] = useState(false);  
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(isOpen => !isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);  
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none"
      >
        {user.name}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-50 flex flex-col">
          <ul className="text-sm text-gray-700">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <Link href={`/profile/${user.id}`}>
                Perfil
              </Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Dashboard
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Configurações
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <button onClick={() => logout()}>Logout</button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
