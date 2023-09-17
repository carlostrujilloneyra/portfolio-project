"use client";
import { useRouter } from "next/navigation";

export const Logo = () => {
  const router = useRouter();

  const handleNavigateHome = () => {
    router.refresh();
    router.push("/");
  };

  return (
    <>
      <h2
        className="min-h-[40px] text-4xl font-extrabold tracking-[3px] text-white hover:cursor-pointer"
        onClick={handleNavigateHome}
      >
        CT
      </h2>
    </>
  );
};
