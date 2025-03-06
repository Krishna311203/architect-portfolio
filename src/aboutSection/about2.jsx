import React from "react";
import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";
const About2 = () => {
  return (
    <section id="about2"  className="h-[200vh] bg-[#e6dccf] flex text-black flex-col  ">
      {/* First Part */}
      <div className="flex-1 flex flex-col lg:flex-row  justify-between p-8 lg:px-16 gap-8">
        {/* Left: Image */}
        <div className=" w-1/2 ">
        <h2 className="absolute left-1/3 mt-20 z-10 sm:text-2xl md:text-7xl ">About <br/> Blaze</h2>
          <img
            src={about1}
            alt="Pic1"
            className="w-full h-3/4 p-20"
          />
         <p className="text-md 2xl:text-xl text-gray hover:text-black transition ease-linear px-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sequi odit recusandae aperiam fugit porro laborum amet dolorum rem. Voluptates quasi dolore quas ad autem, reiciendis voluptas quibusdam repellat blanditiis quos eligendi quia corporis, ipsum exercitationem eaque accusamus dolorum rem debitis velit. Possimus laudantium inventore perspiciatis error atque dicta odit.
          </p>
        </div>

        <div className="w-1/2 flex flex-col justify-center text-left">
         
          <p className="text-md 2xl:text-xl  hover:text-black transition ease-linear text-gray px-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sequi odit recusandae aperiam fugit porro laborum amet dolorum rem. Voluptates quasi dolore quas ad autem, reiciendis voluptas quibusdam repellat blanditiis quos eligendi quia corporis, ipsum exercitationem eaque accusamus dolorum rem debitis velit. Possimus laudantium inventore perspiciatis error atque dicta odit.
          </p>
          <img
            src={about2}
            alt="Pic2"
            className="w-full h-3/4 object-cover p-20"
          />
        </div>
      </div>

     
    </section>
  );
};

export default About2;
