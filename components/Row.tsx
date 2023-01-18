import { useRef, useState } from "react";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { Movie } from "../typings";
import { Thumbnail } from "./Thumbnail";
import { DocumentData } from "firebase/firestore";

interface Props {
  title: string;
  movies: Movie[] | DocumentData[];
}

export function Row({ title, movies }: Props) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction: string) => {
    setIsMoved(true);

    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className=" h-40 space-y-0.5 md:space-y-2">
      <h2 className=" w-52 text-base font-semibold text-light transition cursor-pointer hover:text-white lg:text-2xl">
        {title}
      </h2>
      <div className="group relative md:-ml-2">
        <ChevronLeftIcon
          className="arrowIcon left-2"
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
          className="arrowIcon right-2"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}
