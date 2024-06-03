"use client";

import { useState } from "react";
import { StateContext } from "./StateContext";

export const StateProvider = ({ children }: { children: React.ReactNode }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <StateContext.Provider
      value={{
        showMenu,
        setShowMenu,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
