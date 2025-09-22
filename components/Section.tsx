"use client";

type Props = {
  id: string;
  children: React.ReactNode;
  className?: string;
};

export default function Section({ id, children, className }: Props) {
  return (
    <section
      id={id}
      className={`h-screen w-screen flex justify-center snap-start m-0 p-0 z-10 relative text-center ${className}`}
    >
      {children}
    </section>
  );
}
