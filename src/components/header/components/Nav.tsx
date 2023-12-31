"use client";
import Link from "next/link";

interface Props {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Nav = ({ showMenu }: Props) => {
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
