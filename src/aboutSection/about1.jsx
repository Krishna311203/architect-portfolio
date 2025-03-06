import React from "react";
import aboutbg from "../assets/aboutbg.jpg";
const About1 = () => {
    return (
        <section
            id="about"
            className="h-screen pt-12 overflow-hidden "
        >
            <div className="text-white h-screen w-screen  bg-cover bg-center flex flex-col  items-center justify-start pt-20 text-center " 
                style={{
                    backgroundImage: `url(${aboutbg})`, 
                }}
            >
                <h1 className="text-2xl max-w-lg md:text-4xl font-bold mb-4">
                    ARCHITECTURE IS THE BLUEPRINT OF THE SOUL
                </h1>
                <p className="text-xs md:text-sm uppercase tracking-wide">
                    Explore the new addition
                </p>
            </div>
        </section>
    );
};

export default About1;
