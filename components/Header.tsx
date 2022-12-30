import { BellIcon, SearchIcon } from "@heroicons/react/outline";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import netflixLogo from "../public/netflix-logo.svg";
import netflixProfile from "../public/netflix-profile.webp";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
        console.log("scrollou");
      } else {
        setIsScrolled(false);
        console.log("topo sem scrollar");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${isScrolled && "bg-body"}`}>
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

      <div className=" flex items-center space-x-4 text-sm font-light">
        <SearchIcon className="hidden h-6 w-6 md:inline" />
        <p className=" hidden lg:inline">Kids</p>
        <BellIcon className=" h-6 w-6" />
        <Link href={"/accounts"}>
          <Image
            src={netflixProfile}
            alt="netflix logo"
            width={32.1}
            height={32.1}
            className="cursor-pointer rounded"
          />
        </Link>
      </div>
    </header>
  );
}
