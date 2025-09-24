"use client";

type Props = {
  id: string;
  children: React.ReactNode;
  className?: string;
  ref?: React.Ref<HTMLDivElement>;
};

export default function Section({ id, children, className, ref }: Props) {
  return (
    <section
      id={id}
      ref={ref}
      className={`h-screen w-screen flex snap-start z-10 relative text-center ${className}`}
    >
      {children}
    </section>
  );
}
