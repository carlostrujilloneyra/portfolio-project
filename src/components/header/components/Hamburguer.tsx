"use client";

import { StateContext } from "@/libs/context/StateContext";
import Hamburger from "hamburger-react";
import { useContext, useState } from "react";

export const Hamburguer = () => {
  const { showMenu, setShowMenu, isOpen, setIsOpen } = useContext(StateContext);

  const handleTapMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="sm:hidden">
        <Hamburger
          toggled={isOpen}
          onToggle={handleTapMenu}
          toggle={setIsOpen}
          size={26}
          rounded
          easing="ease-in"
          duration={0.3}
          color="#fff"
        />
      </div>
    </>
  );
};
