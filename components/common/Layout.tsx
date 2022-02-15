import React from "react";
import classNames from "classnames";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <div
      className={classNames(
        "min-h-screen max-w-md mx-auto pt-12",
        props.className
      )}
    >
      {props.children}
    </div>
  );
};

export default Layout;
