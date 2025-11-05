import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = false }: CardProps) {
  const baseStyles = "bg-white rounded-xl shadow-lg p-6";
  const hoverStyles = hover ? "transition-all duration-300 hover:shadow-xl hover:-translate-y-2" : "";
  
  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
}

