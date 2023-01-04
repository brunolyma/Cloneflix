import Image from "next/image";
import { useEffect, useState } from "react";

import { Movie } from "../typings";
import { baseURl } from "../constants/movie";
import { modalState, movieState } from "../atoms/modalAtom";
import { useRecoilState } from "recoil";

import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
interface Props {
  netflixOriginals: Movie[];
}

export function Banner({ netflixOriginals }: Props) {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);
  const [showModal, setShowModal] = useRecoilState(modalState);

  function backgroundImage() {
    if (movie?.backdrop_path === null || movie?.backdrop_path === undefined)
      return {
        backgroundImage: "/public/screen-loading.jpg",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      };

    return {
      backgroundImage: `${baseURl}${
        movie?.backdrop_path || movie?.poster_path
      }`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    };
  }

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);

  return (
    <div className="flex flex-col space-y-2 py-16 w-[60%] md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-16">
      <div className=" absolute top-0 left-0 -z-10 w-screen h-[95vh]">
        <Image
          className="object-cover"
          src={backgroundImage().backgroundImage}
          alt={`cover of ${movie?.title}`}
          fill
          priority
        />
      </div>

      <h1 className=" font-bold text-2xl md:text-4xl lg:text-6xl">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className=" max-w-xs text-xs text-shadow-md md:max-w-lg md:text-base lg:max-w-2xl lg:text-xl">
        {movie?.overview}
      </p>

      <div className="flex space-x-3">
        <button className="bannerButton bg-white text-black">
          <FaPlay className="h-4 w-4 md:h-7 md:w7" /> Play
        </button>
        <button
          className="bannerButton bg-[gray]/70 text-white hover:bg-button/50"
          onClick={() => {
            setCurrentMovie(movie);
            setShowModal(true);
          }}
        >
          <AiOutlineInfoCircle
            className=" h-5 w-5 md:h-8 md:w8
          "
          />{" "}
          More Info
        </button>
      </div>
    </div>
  );
}
