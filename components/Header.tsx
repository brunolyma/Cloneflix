import { BellIcon, SearchIcon } from "@heroicons/react/outline";

import Image from "next/image";
import Link from "next/link";
import netflixLogo from "../public/netflix-logo.svg";
import netflixProfile from "../public/netflix-profile.webp";

export default function Header() {
  return (
    <header>
      <div className="flex items-center space-x-2 md:space-x-10">
        <Link href={"/"}>
          <Image
            src={netflixLogo}
            alt="netflix logo"
            width={100}
            height={100}
            className="cursor-pointer object-contain"
          />
        </Link>

        <ul className="hidden space-x-4 md:flex">
          <li className="headerlink">Home</li>
          <li className="headerlink">Tv Shows</li>
          <li className="headerlink">Movies</li>
          <li className="headerlink">New & Popular</li>
          <li className="headerlink">My List</li>
        </ul>
      </div>

      <div className=" flex">
        <SearchIcon className="hidden h-6 w-6 md:inline" />
        <p className=" hidden lg:inline">Kids</p>
        <BellIcon className=" h-6 w-6" />
        <Link href={"/accounts"}>
          <Image
            src={netflixProfile}
            alt="profile icon"
            className="cursor-pointer rounded"
          />
        </Link>
      </div>
    </header>
  );
}
