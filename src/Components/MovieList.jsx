import { useEffect, useRef, useState } from "react";
import GlobalAPI from "../Services/GlobalAPI";
import MovieCard from "./MovieCard";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import LargeMoviecard from "./LargeMoviecard";

const MovieList = ({ genreId, index_ }) => {
  const [MovieList, setMovieList] = useState([]);
  const ElementRef = useRef(null);

  //Call  function  using UseEffect
  useEffect(() => {
    getMovieByGenreId();
  }, []);

  // Slide Left function of moviecard

  const slideLeft = (element) => {
    element.scrollLeft -= 500;
  };

  // Slide Left function of moviecard

  const slideRight = (element) => {
    element.scrollLeft += 500;
  };

  //   Get Movie List function

  const getMovieByGenreId = () => {
    GlobalAPI.getMovieByGenreId(genreId).then((resp) => {
      // console.log(resp.data.results);
      setMovieList(resp.data.results);
    });
  };

  return (
    <div className="relative">
      <HiChevronLeft
        className={`text-[50px] text-white p-2 z-10 cursor-pointer hidden md:block absolute ${index_%3==0? "mt-[80px]":"mt-[150px]"} `}
        onClick={() => {
          slideLeft(ElementRef.current);
        }}
      />

      <div
        ref={ElementRef}
        className="flex overflow-x-auto gap-8 scrollbar-none scroll-smooth pt-5 px-3 pb-5"
      >
        {MovieList.map((item, index) => (
         <>
            {
                index_%3==0?<LargeMoviecard key={index} movie={item}/>: <MovieCard key={index} movie={item} />
            }
         </>
        ))}
      </div>
      <HiChevronRight
        className={`text-[50px] text-white p-2 z-10 top-0 right-0 cursor-pointer hidden md:block absolute ${index_%3==0? "mt-[80px]":"mt-[150px]"}`}
        onClick={() => {
          slideRight(ElementRef.current);
        }}
      />
    </div>
  );
};

export default MovieList;