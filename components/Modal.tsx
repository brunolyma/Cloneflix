import { XIcon } from "@heroicons/react/outline";
import MuiModal from "@mui/material/Modal";
import { elementAcceptingRef } from "@mui/utils";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "../atoms/modalAtom";
import { Element, Genre } from "../typings";

export function Modal() {
  const [movie, setMovie] = useRecoilState(movieState);
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [trailer, setTrailer] = useState("");
  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    async function fetchMovie() {
      const data = await fetch(
        `https://api.themoviedb.org/3/${
          movie?.media_type === "tv" ? "tv" : "movie"
        }/${movie?.id}?api_key=${
          process.env.NEXT_PUBLIC_API_KEY
        }&language=en-US&append_to_response=videos`
      );
      const response = await data.json();

      if (response?.videos) {
        const index = response.videos.results.findIndex(
          (element: Element) => element.type === "Trailer"
        );
        setTrailer(response.videos?.results[index]?.key);
      }

      if (response?.genres) {
        setGenres(response.genres);
      }
    }

    fetchMovie();
  }, [movie]);

  console.log(trailer);

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <MuiModal open={showModal} onClose={handleClose}>
      <>
        <button
          className=" modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-modal-closebutton hover:bg-modal-closebutton"
          onClick={handleClose}
        >
          <XIcon className=" h-6 w-6" />
        </button>

        <div></div>
      </>
    </MuiModal>
  );
}
