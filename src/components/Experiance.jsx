import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import java from "../../public/java.png";
import javascript from "../../public/javascript.png";
import nodejs from "../../public/node.png";
import python from "../../public/python.webp";
import expressjs from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import mongodb from "../../public/mongodb.jpg";
function Experiance() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "Html",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: java,
      name: "Java",
    },
    {
      id: 4,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 5,
      logo: nodejs,
      name: "NodeJs",
    },
    {
      id: 6,
      logo: python,
      name: "Python",
    },
    {
      id: 7,
      logo: expressjs,
      name: "Express js",
    },
    {
      id: 8,
      logo: reactjs,
      name: "React",
    },
    {
      id: 9,
      logo: mongodb,
      name: "Mongo DB",
    },
    
  ];
  return (
    <div
      name="Skills"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-5xl font-bold mb-5">Skills</h1>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3 md:m-10">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;
