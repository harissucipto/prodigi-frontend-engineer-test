import React from "react";
import { ChevronLeftIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

interface NavHeaderProps {
  title: string;
}

const NavHeader: React.FC<NavHeaderProps> = (props) => {
  const router = useRouter();

  return (
    <div className="flex justify-between h-12 items-center shadow-md fixed z-10 inset-0 max-w-md mx-auto bg-white">
      <ChevronLeftIcon
        className="w-7 h-7 text-black cursor-pointer"
        onClick={() => {
          router.back();
        }}
      />
      <p className="font-bold">{props.title}</p>
      <div className="text-sm pr-1">Ask Us</div>
    </div>
  );
};

export default NavHeader;
