import React from "react";
import { motion } from "framer-motion";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpeg";

const HeroComponent = () => {
	const handleScroll = (id) => {
		document.getElementById(id).scrollIntoView({ behavior: "smooth" });
	};

	return (
		<section className="h-screen bg-[rgb(20,20,20)] flex flex-col items-center overflow-hidden">
			{/* Top Navigation */}
			<div className="w-full flex justify-between items-center px-1 md:px-10 py-5">
				{/* Scroll Links */}
				<div className="flex space-x-4 md:space-x-8 text-xs md:text-sm 2xl:text-lg text-white cursor-pointer">
					<span onClick={() => handleScroll("about")}>ABOUT</span>
					<span onClick={() => handleScroll("about2")}>PROFESSIONALS</span>
				</div>
				{/* Title */}
				<h1 className="text-white md:text-base lg:text-2xl 2xl:text-3xl">BLAZE</h1>
				<div className="flex space-x-4 md:space-x-8 text-xs md:text-sm 2xl:text-lg text-white cursor-pointer">
					<span onClick={() => handleScroll("projects")}>PROJECTS</span>
					<span onClick={() => handleScroll("contact")}>CONTACT</span>
				</div>
			</div>

			{/* Main Content */}
			<div className="flex justify-between items-center h-full lg:w-full px-10">
				{/* Left Block (Expands from Left) */}
				<motion.div
					className="hidden lg:flex flex-col items-center justify-end py-7 lg:items-start h-full text-center lg:text-left text-white space-y-4 mb-6 lg:mb-0"
					initial={{ width: 0, opacity: 0 }}
					animate={{ width: "100%", opacity: 1 }}
					transition={{ duration: 1 }}
				>
					<motion.img
						src={hero3}
						alt="Left Image"
						className="w-32 md:w-40 2xl:w-60 h-auto"
						initial={{ scaleX: 0 }}
						animate={{ scaleX: 1 }}
						transition={{ duration: 1, ease: "easeOut" }}
					/>
					<p className="text-xs md:text-sm 2xl:text-lg leading-5">
						THE ART OF <br /> SHAPING SPACES. <br /> INTERIOR DESIGN IS THE <br /> SOUL THAT BREATHES <br />
						LIFE INTO THEM.
					</p>
				</motion.div>

				{/* Main Hero Block (Scales Up) */}
				<motion.div
					className="flex flex-col items-center text-center"
					initial={{ scale: 0, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ duration: 1.2 }}
				>
					<motion.img
						src={hero1}
						alt="Main Hero"
						className="w-48 md:w-52 h-auto"
						initial={{ scaleY: 0 }}
						animate={{ scaleY: 1 }}
						transition={{ duration: 1, ease: "easeOut" }}
					/>

					<h2 className="text-white text-3xl md:text-5xl lg:text-6xl mt-6">
						BLAZE <br /> ARCHITECTS
					</h2>
					<motion.button
						onClick={() => handleScroll("offers")}
						className="mt-8 px-4 md:px-4 py-2 border bg-white border-white rounded-full text-black hover:bg-beige hover:text-white transition"
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.5, duration: 1 }}
					>
						EXPLORE MORE
					</motion.button>
				</motion.div>

				{/* Right Block (Expands from Right) */}
				<motion.div
					className="hidden lg:flex flex-col items-center lg:items-end justify-start h-full py-10 text-center lg:text-right text-white space-y-4 mt-6 lg:mt-0"
					initial={{ width: 0, opacity: 1 }}
					animate={{ width: "100%", opacity: 1 }}
					transition={{ duration: 1 }}
				>
					<motion.img
						src={hero2}
						alt="Right Image"
						className="w-32 md:w-40 2xl:w-60 h-auto"
						initial={{ scaleX: 0 }}
						animate={{ scaleX: 1 }}
						transition={{ duration: 1, ease: "easeOut" }}
					/>
					<p className="text-xs md:text-sm 2xl:text-lg leading-5 text-right">
						OUR <br /> STUDIO <br /> IS WHERE INSPIRATION <br /> MEETS INNOVATION <br /> AND DESIGN BECOMES <br />
						AN ART FORM.
					</p>
				</motion.div>
			</div>
		</section>
	);
};

export default HeroComponent;
