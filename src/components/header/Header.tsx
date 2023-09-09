import { Logo } from "./components";

export const Header = () => {
  return (
    <>
      <header className="container-max-width padding-x flex h-24 content-center justify-between bg-[#000000] py-8 sm:py-9">
        {/* Logo */}
        <Logo />

        {/* Nav */}

        {/* Botón para cambiar a modo claro */}
      </header>
    </>
  );
};
