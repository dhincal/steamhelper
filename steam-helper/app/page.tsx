import Image from "next/image";
import FeatCard from "./components/featCard";
import { FiThumbsUp, FiPieChart, FiMap, FiDivideCircle } from "react-icons/fi";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();

  return (
    <div className="lg:px-8 w-screen">
      <div className="flex flex-col justify-center align-middle items-center gap-y-8 h-[60vh]">
        <div className="flex flex-col justify-center align-middle items-center gap-y-2">
          <h1 className="text-blue-600 text-7xl font-bold">Steam Helper</h1>
          <h3 className="text-stone-200 text-3xl font-light">
            Just the right tools for your steam library
          </h3>
        </div>
        {session ? (
          <img src={session.user?.image ?? ""}></img>
        ) : (
          <a className="bg-blue-600 rounded-lg py-1 w-2/12 text-center text-slate-300 cursor-pointer">
            Login Via Steam
          </a>
        )}
      </div>
      <div className="flex flex-col gap-y-12 py-16">
        <h1 className="text-blue-600 text-3xl font-bold text-center">
          Tools that we have worked on...
        </h1>
        <div className="flex flex-row flex-wrap justify-center gap-y-10 gap-x-20">
          <FeatCard
            title="AI Game Recommender"
            desc="AI Tool that recommends games based on your preferences"
            icon={<FiThumbsUp fontSize={48} stroke="#e7e5e4" />}
            link="/game"
            className=""
          />
          <FeatCard
            title="Analyze Discount"
            desc="Analyzes the discount of a game and tells you if it's worth it"
            icon={<FiPieChart fontSize={48} stroke="#e7e5e4" />}
            link="/game"
            className=""
          />
          <FeatCard
            title="Explore Games"
            desc="Gives you new games to explore based on your preferences"
            icon={<FiMap fontSize={48} stroke="#e7e5e4" />}
            link="/game"
            className=""
          />
          <FeatCard
            title="Random Game Picker"
            desc="If you don't know what to play, let us pick a game for you"
            icon={<FiDivideCircle fontSize={48} stroke="#e7e5e4" />}
            link="/game"
            className=""
          />
        </div>
      </div>
    </div>
  );
}
