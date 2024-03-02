import { ReactNode } from "react";
import { Link } from "react-router-dom";

type ButtonProps = {
  children: ReactNode;
  type: "primary" | "secondary";
  to?: string;
};

function Button({ children, to, type }: ButtonProps) {
  let typeCss = "";

  if (type === "primary")
    typeCss = "gap-2 rounded-3xl bg-lime-500 px-6 py-3 text-xl text-white";

  if (type === "secondary")
    typeCss = "border-lime-900 border rounded-2xl py-2 px-5";

  if (to) {
    return (
      <Link to={to} className={`inline-flex items-center ${typeCss}`}>
        {children}
      </Link>
    );
  }
  return <button>Normal btn</button>;
}

export default Button;
