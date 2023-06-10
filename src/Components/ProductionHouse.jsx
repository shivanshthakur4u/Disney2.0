// Image Import Starts here
import Disney from "../assets/Images/disney.png";
import Marvel from "../assets/Images/marvel.png";
import NationalG from "../assets/Images/nationalG.png";
import Pixar from "../assets/Images/pixar.png";
import StarWar from "../assets/Images/starwar.png";
// Images Import Ends here

// Video Import Starts here
import DisneyV from "../assets/Videos/disney.mp4";
import MarvelV from "../assets/Videos/marvel.mp4";
import NationalGV from "../assets/Videos/national-geographic.mp4";
import PixarV from "../assets/Videos/pixar.mp4";
import StarWarV from "../assets/Videos/star-wars.mp4";
// Video Import Ends here

const ProductionHouse = () => {
  const list = [
    {
      id: 1,
      image: Disney,
      video: DisneyV,
    },

    {
      id: 2,
      image: Marvel,
      video: MarvelV,
    },

    {
      id: 3,
      image: Pixar,
      video: PixarV,
    },

    {
      id: 4,
      image: NationalG,
      video: NationalGV,
    },

    {
      id: 5,
      image: StarWar,
      video: StarWarV,
    },
  ];
  return (
    <div className="flex gap-2 md:gap-5 p-2 px-5 md:px-16">
      {list.map((item, index) => (
        <div
          key={index}
          className="border-[2px] border-gray-600 rounded-lg hover:scale-110 
          transition-all duration-300 ease-in-out cursor-pointer relative shadow-xl shadow-black"
        >
         <video src={item.video} autoPlay loop playsInline className="absolute top-0 rounded-md z-0 opacity-0 hover:opacity-50"/>
          <img src={item.image} className=" w-full z-[1]" />
         
        </div>
      ))}
    </div>
  );
};

export default ProductionHouse;
