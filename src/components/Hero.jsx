import { Bio } from "../data/constants";
import TypewriterComponent from "typewriter-effect";
import heroImage from "../assets/foto-perfil.jpg";

export const Hero = () => {
    return (
        <div id="about">
            <div
                id="heroContainer"
                className="bg-gray-400 py-[5.5rem] my-clip-path flex items-center justify-center relative"
            >
                <div
                    id="heroInnerContainer"
                    className="flex flex-col lg:flex-row items-center w-full max-w-screen-2xl justify-between mx-10 gap-4 md:gap-0"
                >
                    <div
                        id="heroLeftContainer"
                        className="my-8 flex flex-col self-start items-center lg:items-start w-full order-2 lg:order-1"
                    >
                        <h2 className="text-4xl font-bold text-center sm:text-start">
                            Hi I&apos;m {Bio.name}!
                        </h2>
                        <div className="text-3xl font-bold text-center">
                            I am a{" "}
                            <span className="inline-block text-blue-600">
                                <TypewriterComponent
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </span>
                        </div>
                        <p className="text-lg text-center lg:text-start">
                            {Bio.description}
                        </p>

                        <a
                            className="mt-4 bg-gradient-to-r from-cyan-500 to-blue-500 py-2 px-4 rounded-2xl text-lg font-medium hover:scale-110 transition duration-300 shadow-lg shadow-cyan-500/50 hover:brightness-110 active:scale-100"
                            href={Bio.resume}
                            rel="noreferrer noopener"
                            target="_blank"
                        >
                            Check my Resume!
                        </a>
                    </div>
                    <div
                        id="heroRightContainer"
                        className="w-full flex items-center justify-center lg:justify-end lg:items-end order-1 lg:order-2 mb-4"
                    >
                        <img
                            src={heroImage}
                            alt="foto de perfil"
                            className="w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] object-cover object-center rounded-full border-2 border-blue-500"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
