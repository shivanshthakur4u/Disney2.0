import { useEffect, useRef, useState } from "react";
import GlobalAPI from "../Services/GlobalAPI";
import {HiChevronLeft, HiChevronRight} from "react-icons/hi2";
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;
const Slider = () => {
  const [MovieList, setMovieList] = useState([]);
  const ElementRef= useRef();

  useEffect(() => {
    getTrendingMovies();
  }, []);
  const getTrendingMovies = () => {
    GlobalAPI.getTrendingVideos.then((resp) => {
      console.log(resp.data.results);
      setMovieList(resp.data.results);
    });
  };

  const SliderRight=(element)=>{
element.scrollLeft+=screenWidth-110
  }

  const SliderLeft=(element)=>{
    element.scrollLeft-=screenWidth-110
      }

  return (
    <div><HiChevronLeft className= "hidden md:block text-white absolute text-[30px] mx-8 mt-[150px] cursor-pointer" onClick={()=>{SliderLeft(ElementRef.current)}}/>
    <HiChevronRight className="hidden md:block text-white absolute right-0 text-[30px] mx-8 mt-[150px] cursor-pointer" onClick={()=>{SliderRight(ElementRef.current)}}/>
    <div className="flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth " ref={ElementRef}>
        {MovieList.map((item, index)=>(
            <img src={IMAGE_BASE_URL+item.backdrop_path} className=" min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all ease-in"  />
        ))}
    </div>
    </div>
  )
};

export default Slider;
