import React from "react";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "light" | "text";
  className?: string;
  target?: string;
  rel?: string;
}

export default function Button({
  href,
  onClick,
  children,
  variant = "primary",
  className = "",
  target,
  rel,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center gap-1.5 font-semibold text-xs sm:text-sm transition-all duration-200 group";

  const variants = {
    primary:
      "bg-[#003C72] text-white px-4 py-2 rounded-lg hover:bg-[#003C72] hover:shadow-sm hover:-translate-y-0.5",
    outline:
      "border border-[#0d736d] text-[#0d736d] px-4 py-2 rounded-lg hover:bg-[#0d736d] hover:text-white hover:-translate-y-0.5",
    light:
      "bg-white text-[#0d736d] px-4 py-2 rounded-lg hover:bg-[#f4f7f2] hover:-translate-y-0.5",
    text: "text-[#0d736d] hover:gap-2 underline-offset-4 hover:underline",
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} target={target} rel={rel}>
        {children}
        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
    </button>
  );
}
