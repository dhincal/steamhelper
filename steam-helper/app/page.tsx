import Image from "next/image";

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
    </div>
  );
}
