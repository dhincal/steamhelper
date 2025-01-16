"use client";
import Image from "next/image";
import FeatCard from "./components/featCard";
import { FiThumbsUp, FiPieChart, FiMap, FiDivideCircle } from "react-icons/fi";
import { getServerSession } from "next-auth";
import { useSession, signIn, signOut } from "next-auth/react";
import { env } from "process";

interface SteamUser {
  steamid?: string;
  // Add other properties if needed
}

interface SessionData {
  user: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
    steam?: SteamUser;
  };
}

export default function Home() {
  const { data } = useSession() as { data: SessionData | null };
  const herokuProxy = process.env.HEROKU_PROXY;
  const userSteamId = data?.user.steam?.steamid;

  const userOwnedGames = async () => {
    if (data) {
      const fetchLink = `https://${herokuProxy}.herokuapp.com/https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=14C4E27A43FC801B629A1E3C08DF5E1F&steamid=${userSteamId}
      &format=json`;
      const requestProp = {
        method: "GET",
      };
      const response = await fetch(fetchLink, requestProp);
      const rawData = await response.json();
      const games = rawData.response;
      return games;
    }
  };

  // const sortGames = async () => {
  //   const gamesObject = await userOwnedGames();
  //   const gamesCount = gamesObject.game_count;
  //   const gameLibrary = gamesObject.games;

  //   let gamesList = [];

  //   for (let i = 0; i < gamesCount; i++) {
  //     const appID = gameLibrary[i].appid;
  //     console.log(appID);
  //     const gameFetchLink = `https://${herokuProxy}.herokuapp.com/http://store.steampowered.com/api/appdetails?appids=${appID}`;
  //     const requestProp = {
  //       method: "GET",
  //     };
  //     const gameResponse = await fetch(gameFetchLink, requestProp);
  //     console.log(gameResponse);
  //     const rawData = await gameResponse.json();
  //     const games = rawData.body;

  //     //gamesList.push(gameData.);
  //     console.log(games);
  //   }

  //   //return gamesList;
  // };

  //const userGamesName = sortGames();

  return (
    <div className="lg:px-8 w-screen">
      <div className="flex flex-col justify-center align-middle items-center gap-y-8 h-[60vh]">
        <div className="flex flex-col justify-center align-middle items-center gap-y-2">
          <h1 className="text-blue-600 text-7xl font-bold">Steam Helper</h1>
          <h3 className="text-stone-200 text-3xl font-light">
            Just the right tools for your steam library
          </h3>
        </div>
        {data ? (
          <img src={data.user?.image ?? ""}></img>
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
