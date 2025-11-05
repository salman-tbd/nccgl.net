import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: "gray" | "white";
}

export default function Section({ children, className = "", background = "white" }: SectionProps) {
  const baseStyles = "py-16 lg:py-20 px-4";
  const backgroundStyles = background === "gray" ? "bg-slate-50" : "bg-white";
  
  return (
    <section className={`${baseStyles} ${backgroundStyles} ${className}`}>
      {children}
    </section>
  );
}
