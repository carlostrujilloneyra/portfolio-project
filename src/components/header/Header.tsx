"use client";

import { useState } from "react";
import { Hamburguer, Logo, Nav } from "./components";

export const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <>
      <header className="container-max-width padding-x fixed left-0 right-0 top-0 z-40 flex h-[100px] w-full content-center items-center justify-between bg-gradient py-8 sm:py-9">
        {/* Logo */}
        <Logo />

        {/* Aquí va el menú hamburguesa */}
        <Hamburguer showMenu={showMenu} setShowMenu={setShowMenu} />

        {/* Nav */}
        <Nav showMenu={showMenu} />

        {/* Botón para cambiar a modo claro */}
      </header>
    </>
  );
};
