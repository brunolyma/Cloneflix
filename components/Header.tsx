import Image from "next/image";
import netflixLogo from "../public/netflix-logo.svg";

export default function Header() {
  return (
    <header>
      <div className="flex items-center space-x-2 md:space-x-10">
        <Image
          src={netflixLogo}
          alt="netflix logo"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />

        <ul className="hidden space-x-4 md:flex">
          <li className="headerlink">Home</li>
          <li className="headerlink">Tv Shows</li>
          <li className="headerlink">Movies</li>
          <li className="headerlink">New & Popular</li>
          <li className="headerlink">My List</li>
        </ul>
      </div>

      <div></div>
    </header>
  );
}
