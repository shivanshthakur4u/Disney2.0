const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";
const LargeMoviecard = ({movie}) => {
  return (
    <section className="hover:scale-110 transition-all duration-300 ease-in">
    <img className='w-[110px] md:w-[260px] rounded-lg hover:border-[3px] border-gray-400  cursor-pointer '  
    src={IMAGE_BASE_URL+movie.backdrop_path}/>
    <h2 className="w-[110px] md:w-[260px] text-white mt-2">{movie.title}</h2>
   </section>
  )
}

export default LargeMoviecard