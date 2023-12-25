import { Bio } from "../data/constants";
import TypewriterComponent from "typewriter-effect";
import heroImage from "../assets/foto-perfil.jpg";

export const Hero = () => {
    return (
        <div id="about">
            <div
                id="heroContainer"
                className="bg-slate-400 py-10 md:py-16 my-clip-path flex items-center justify-center relative"
            >
                <div
                    id="heroInnerContainer"
                    className="flex flex-col md:flex-row items-center w-full max-w-screen-2xl justify-between mx-6 gap-4 md:gap-0"
                >
                    <div
                        id="heroLeftContainer"
                        className="mb-8 flex flex-col items-center md:items-start w-full order-2 md:order-1"
                    >
                        <h2 className="text-4xl font-bold text-center sm:text-start">
                            Hi I&apos;m {Bio.name}!
                        </h2>
                        <div className="text-3xl font-bold">
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
                        <p className="text-lg">{Bio.description}</p>

                        <button className="mt-4 bg-gradient-to-r from-cyan-500 to-blue-500 py-2 px-4 rounded-2xl text-lg font-medium hover:scale-110 transition duration-300 shadow-lg shadow-cyan-500/50 hover:brightness-110 active:scale-100">
                            Check my Resume!
                        </button>
                    </div>
                    <div
                        id="heroRightContainer"
                        className="w-full flex items-center justify-end md:items-end order-1 md:order-2"
                    >
                        <img
                            src={heroImage}
                            alt="foto de perfil"
                            className="w-[400px] h-[400px] object-cover object-center rounded-full border-2 border-blue-500"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
