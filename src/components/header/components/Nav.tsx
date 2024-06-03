"use client";
import { StateContext } from "@/libs/context/StateContext";
import Link from "next/link";
import { useContext } from "react";

export const Nav = () => {
  const { showMenu } = useContext(StateContext);

  return (
    <>
      <nav
        className={`nav-mobile z-10 bg-black sm:bg-transparent ${
          showMenu ? "showMenu" : ""
        } sm:nav-tablet-desktop text-lg font-bold text-white`}
      >
        <ul className="list-header flex h-full flex-col items-center sm:flex-row">
          <li className="item-header sm:mx-4">
            <Link className="root-header" href="/#about">
              Acerca de
            </Link>
          </li>

          <li className="item-header sm:mx-4">
            <Link className="root-header" href="/#skills">
              Skills
            </Link>
          </li>

          <li className="item-header sm:mx-4">
            <Link className="root-header" href="/#experience">
              Experiencia
            </Link>
          </li>

          <li className="item-header sm:mx-4">
            <Link className="root-header" href="/#projects">
              Proyectos
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
