
import Image from "next/image";

import Logo from "@/app/assets/images/RareCardRaffles_Logo.png";

export default function Home() {
  return (
    <div className="h-screen">
    <header className="text-white bg-blue-500 flex justify-between [&>*]:mx-4">

      <Image className="-rotate-[17deg]" src={Logo} width={192} height={192} alt="logo"></Image>

      <nav class="flex flex-col md:flex-row justify-end items-center space-y-4 md:space-y-0 md:space-x-4 ">
        <button class="bg-red-500 border-4 border-red-800 text-white py-2 px-4 rounded">Current Raffles</button>
        <button class="bg-red-500 border-4 border-red-800 text-white py-2 px-4 rounded">Previous Raffles</button>
        <button class="bg-red-500 border-4 border-red-800 text-white py-2 px-4 rounded">About / Contact Us</button>
        <button class="bg-red-500 border-4 border-red-800 text-white py-2 px-4 rounded">Account</button>
      </nav>
      
    </header>

    <main className="h-full bg-orange-400">

    </main>

    <footer className="h-[192px] bg-blue-500">

    </footer>
    </div>
  );
}
