import React from "react";
import Hero from "@/components/common/Hero";

interface LayoutMainContentProps {
  title: string | React.ReactNode;
  children: React.ReactNode;
}

const LayoutMainContent: React.FC<LayoutMainContentProps> = ({
  children,
  ...props
}) => {
  return (
    <div className="relative">
      <Hero title={props.title} />
      <div className="absolute top-[150px] left-0 bg-white rounded-t-[20px] p-5 w-full">
        <div className="mt-4  ">{children}</div>
      </div>
    </div>
  );
};

export default LayoutMainContent;
