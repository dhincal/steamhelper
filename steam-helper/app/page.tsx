import Image from "next/image";
import FeatCard from "./components/featCard";

export default function Home() {
  return (
    <div className="lg:px-8 w-screen">
      <div className="flex flex-col justify-center align-middle items-center gap-y-8 h-[60vh]">
        <div className="flex flex-col justify-center align-middle items-center gap-y-2">
          <h1 className="text-blue-600 text-7xl font-bold">Steam Helper</h1>
          <h3 className="text-stone-200 text-3xl font-light">
            Just the right tools for your steam library
          </h3>
        </div>
        <a className="bg-blue-600 rounded-lg py-1 w-2/12 text-center text-slate-300 cursor-pointer">
          Login Via Steam
        </a>
      </div>
      <div className="flex flex-col gap-y-12 py-16">
        <h1 className="text-blue-600 text-3xl font-bold text-center">
          Tools that we have worked on...
        </h1>
        <div className="flex flex-row flex-wrap justify-center gap-y-10 gap-x-20">
          <FeatCard
            title="Game Library"
            desc="Manage your game library with ease"
            icon="/icons/game.svg"
            link="/game"
            className=""
          />
          <FeatCard
            title="Game Library"
            desc="Manage your game library with ease"
            icon="/icons/game.svg"
            link="/game"
            className=""
          />
          <FeatCard
            title="Game Library"
            desc="Manage your game library with ease"
            icon="/icons/game.svg"
            link="/game"
            className=""
          />
          <FeatCard
            title="Game Library"
            desc="Manage your game library with ease"
            icon="/icons/game.svg"
            link="/game"
            className=""
          />
        </div>
      </div>
    </div>
  );
}
