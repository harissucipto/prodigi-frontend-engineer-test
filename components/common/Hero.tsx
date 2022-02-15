import React from "react";

interface HeroProps {
  title: string | React.ReactNode;
}

const Hero: React.FC<HeroProps> = (props) => {
  return (
    <div
      className="h-[167px] pt-8 px-6 
bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800
    
    "
    >
      {props.title}
    </div>
  );
};

export default Hero;
