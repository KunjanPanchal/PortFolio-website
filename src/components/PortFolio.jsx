import React from "react";
import java from "../../public/java.png";
import python from "../../public/python.webp";
import linkedUs from "../../public/linkedUs.png";
import spotify from "../../public/spotify.jpg";
import dummy from "../../public/dummy.png";
import netflix from "../../public/netflix.png";
function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: linkedUs,
      name: "Linked us (Mobile app)",
      link:"https://github.com/KunjanPanchal/Linked-us"
    },
    {
      id: 2,
      logo: spotify,
      name: "Spotify clone",
      link:"https://github.com/KunjanPanchal/Spotify-Clone"

    },
    {
      id: 3,
      logo: dummy,
      name: "Dummy data generator",
      link:"https://github.com/KunjanPanchal/Dummy-Data-Generator"
    },
    {
      id: 4,
      logo: netflix,
      name: "Netflix Clone",
      link:"https://github.com/KunjanPanchal/Netflix-Clone"
    },
    
  ];
  return (
    <div
      name="Projects"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-5xl font-bold mb-5">Projects</h1>
        <span className=" text-2xl underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 my-8 md:m-10 ">
          {cardItem.map(({ id, logo, name ,link }) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300 flex flex-col items-center gap-4"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">
                  Source code and description
                </p>
              </div>
              <div className=" px-6 py-4 space-x-3 justify-around">
                {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                  Video
                </button> */}
                <a href={link} target="_blank" className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                  Source code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
