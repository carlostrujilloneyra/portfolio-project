"use client";
import { useRouter } from "next/navigation";

export const Logo = () => {
  const router = useRouter();

  const handleNavigateHome = () => {
    router.push("/");
    router.refresh();
  };

  return (
    <>
      <h2
        className="min-h-[40px] text-4xl font-extrabold tracking-[3px] text-white"
        onClick={handleNavigateHome}
      >
        CT
      </h2>
    </>
  );
};
