"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="w-full fixed z-50 ">
      <nav className="container mx-auto flex justify-end items-center px-4 py-4">
        {/* Ícone do menu mobile no canto direito */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {menuOpen ? (
              <X size={32} className="text-white" />
            ) : (
              <Menu size={32} className="text-white" />
            )}
          </button>
        </div>

        {/* Menu Desktop */}
        <ul className="hidden lg:flex gap-10 text-lg sm:text-xl font-medium text-white ml-auto">
          <li>
            <a
              href="#hero"
              className="hover:text-blue-500 transition"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#sobre"
              className="hover:text-blue-500 transition"
              onClick={() => setMenuOpen(false)}
            >
              Sobre
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="hover:text-blue-500 transition"
              onClick={() => setMenuOpen(false)}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-blue-500 transition"
              onClick={() => setMenuOpen(false)}
            >
              Projetos
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-blue-500 transition"
              onClick={() => setMenuOpen(false)}
            >
              Contato
            </a>
          </li>
        </ul>

        {/* Menu Mobile Slide */}
        <div
          className={`fixed top-0 right-0 h-full w-2/3 sm:w-1/2  bg-opacity-95 backdrop-blur-md transform ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out lg:hidden z-50`}
        >
          <div className="flex justify-end p-4">
            <button onClick={toggleMenu} aria-label="Close menu">
              <X size={32} className="text-white" />
            </button>
          </div>

          <ul className="flex flex-col items-center gap-8 mt-20 text-white text-xl">
            <li>
              <a
                onClick={toggleMenu}
                href="#hero"
                className="hover:text-blue-300 transition"
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={toggleMenu}
                href="#sobre"
                className="hover:text-blue-300 transition"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                onClick={toggleMenu}
                href="#skills"
                className="hover:text-blue-300 transition"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                onClick={toggleMenu}
                href="#projects"
                className="hover:text-blue-300 transition"
              >
                Projetos
              </a>
            </li>
            <li>
              <a
                onClick={toggleMenu}
                href="#contact"
                className="hover:text-blue-300 transition"
              >
                Contato
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
