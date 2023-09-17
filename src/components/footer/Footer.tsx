import { Logo } from "../header/components";

export const Footer = () => {
  return (
    <>
      <footer className="container-max-width padding-x grid  grid-cols-[55px,max-content] items-center gap-x-6 bg-gradient py-9 pt-4 text-center sm:py-10 lg:gap-x-8">
        <Logo />
        <div>
          <p className="text-end  text-white">
            &copy; 2023, Carlos Trujillo Neyra
          </p>
        </div>
      </footer>
    </>
  );
};
