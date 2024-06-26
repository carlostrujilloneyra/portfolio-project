import { Logo } from "../header/components";

export const Footer = () => {
  return (
    <>
      <footer className="container-max-width padding-x flex items-center justify-between gap-6 py-8 text-center sm:py-9 lg:gap-x-8">
        <Logo />
        <div>
          <p className="text-end text-sm text-white">
            &copy; 2024, Carlos Trujillo Neyra
          </p>
        </div>
      </footer>
    </>
  );
};
