"use client";

import Hamburger from "hamburger-react";
import { useState } from "react";

interface Props {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Hamburguer = ({ setShowMenu, showMenu }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
