import Image from "next/image";
import { useEffect, useState } from "react";

import { Movie } from "../typings";
import { baseURl } from "../constants/movie";

interface Props {
  netflixOriginals: Movie[];
}

export default function Banner({ netflixOriginals }: Props) {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className=" absolute top-0 left-0 -z-10 w-screen h-[95vh]">
        <Image
          className="object-cover"
          src={`${baseURl}${movie?.backdrop_path || movie?.poster_path}`}
          alt={`cover of ${movie?.title}`}
          fill
        />
      </div>

      <h1 className=" font-bold text-2xl md:text-4xl lg:text-7xl">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className=" max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
        {movie?.overview}
      </p>
    </div>
  );
}
