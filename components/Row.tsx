import { useRef, useState } from "react";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { Movie } from "../typings";
import Thumbnail from "./Thumbnail";

interface Props {
  // When using firebase
  // movie: Movie | DocumentData[]
  title: string;
  movies: Movie[];
}

export default function Row({ title, movies }: Props) {
  const rowRef = useRef(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction: string) => {};

  return (
    <div className=" h-40 space-y-0.5 md:space-y-2">
      <h2 className=" w-52 text-base font-semibold text-light transition cursor-pointer hover:text-white lg:text-2xl">
        {title}
      </h2>
      <div className="group relative md:-ml-2">
        <ChevronLeftIcon
          className="arrowIcon"
          onClick={() => handleClick("left")}
        />

        <div
          ref={rowRef}
          className=" scrollbar-hide flex items-center space-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2"
        >
          {movies.map((movie) => (
            <Thumbnail key={movie.id} movie={movie} />
          ))}
        </div>

        <ChevronRightIcon
          className="arrowIcon"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}
