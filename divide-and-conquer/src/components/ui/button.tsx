import * as React from "react";

export const Button = ({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-600 text-white text-2xl px-8 py-4 rounded"
      {...props}
    >
      {children}
    </button>
  );
};