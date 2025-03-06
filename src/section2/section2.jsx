import React from "react";

const Section2 = () => {
    return (
        <section id="offers" className="h-screen  bg-[#e6dccf] flex flex-col items-center justify-center text-center">
            {/* Title */}
            <div> <h3 className="text-sm md:text-base text-black tracking-wider mb-1">
                BLAZE OFFERS
            </h3>
                <hr className=" border-t border-gray mt-1 mb-4" />
            </div>
            {/* Main Text Rows */}
            <div className="space-y-1 flex flex-col  w-full max-w-screen-md">
                <div >
                    <h1 className="text-4xl md:text-6xl text-gray hover:text-black transition ease-in">
                        RESIDENTIAL
                    </h1>
                    <hr className=" border-t border-gray my-4" />
                </div>
                <div>
                    <h1 className="text-4xl md:text-6xl text-gray  hover:text-black transition ease-in">
                        INTERIO
                    </h1>
                    <hr className="border-t border-gray my-4" />
                </div>
                <div>
                    <h1 className="text-4xl md:text-6xl text-gray  hover:text-black transition ease-in">
                        ARCHITECTURE
                    </h1>
                    <hr className="border-t border-gray my-4" />
                </div>
                <div>
                    <h1 className="text-4xl md:text-6xl text-gray  hover:text-black transition ease-in">
                        FURNITURE
                    </h1>
                    <hr className="border-t border-gray my-4" />
                </div>
            </div>
        </section>
    );
};

export default Section2;
