import { ReactNode } from "react";
import { Link } from "react-router-dom";

type ButtonProps = {
  children: ReactNode;
  to?: string;
};

function Button({ children, to }: ButtonProps) {
  if (to) {
    return (
      <Link
        to={to}
        className="inline-flex items-center gap-2 rounded-3xl bg-lime-500 px-6 py-3 text-xl text-white"
      >
        {children}
      </Link>
    );
  }
  return <button>Normal btn</button>;
}

export default Button;
