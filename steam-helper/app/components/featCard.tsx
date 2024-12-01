import React from "react";

export default function FeatCard({
  title,
  desc,
  icon,
  link,
  className,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
  link: string;
  className?: string;
}) {
  return (
    <a
      href={link}
      className={
        className +
        ` flex flex-col gap-y-3 px-4 py-12 rounded-lg justify-center items-center cursor-pointer bg-blue-600 w-72`
      }
    >
      {icon}
      <h1 className="text-stone-200 font-bold text-2xl text-center">{title}</h1>
      <h3 className="text-stone-200 font-light text-xl text-center">{desc}</h3>
    </a>
  );
}
