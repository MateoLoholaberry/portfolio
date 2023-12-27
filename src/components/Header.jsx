import { useState, useRef } from "react";
import logo from "../assets/Mi_logo.jfif";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Bio, titleLinks } from "../data/constants";

export const Header = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    const navMobile = useRef(null);

    const handleMenuToggle = () => {
        if (menuToggle) {
            setMenuToggle(false);
            navMobile.current.classList.add("-top-[300px]");
            navMobile.current.classList.remove("top-20");
        } else {
            setMenuToggle(true);
            navMobile.current.classList.remove("-top-[300px]");
            navMobile.current.classList.add("top-20");
        }
    };

    return (
        <div className="flex justify-center items-center h-20 sticky top-0 z-20 bg-gray-400">
            <header className="flex justify-between md:justify-evenly lg:justify-between w-full max-w-screen-2xl px-4 lg:px-10">
                <a
                    className="flex items-center gap-2 cursor-pointer"
                    href="#about"
                >
                    <div className="hover:text-blue-500 font-medium transition-colors font-carattere text-2xl text-center">
                        <p>Mateo</p>
                        <p>Loholaberry</p>
                    </div>
                </a>
                <nav className="hidden md:flex items-center gap-10 mx-2">
                    {titleLinks.map((el) => {
                        return (
                            <a
                                href={el.url}
                                key={el.title}
                                className="hover:text-blue-500 font-medium transition-colors text-lg duration-300"
                            >
                                {el.title}
                            </a>
                        );
                    })}
                </nav>
                <div className="hidden lg:block self-center">
                    <a
                        className="rounded-full border-2 border-blue-600 text-blue-600 px-6 py-1 text-lg hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out active:bg-blue-500 active:border-blue-500 whitespace-nowrap"
                        href={Bio.github}
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        My Github
                    </a>
                </div>
                <button
                    className="md:hidden cursor-pointer text-2xl"
                    onClick={handleMenuToggle}
                >
                    {menuToggle ? <IoClose /> : <GiHamburgerMenu />}
                </button>
            </header>
            {/* Menu Mobile */}
            <div
                className="absolute -top-[300px] flex flex-col w-full items-center justify-center bg-slate-500/50 py-3 rounded-b-lg transition-all z-50 ease-in-out duration-300 backdrop-blur-sm"
                ref={navMobile}
            >
                {titleLinks.map((el) => {
                    return (
                        <a
                            href={el.url}
                            key={el.title}
                            className="font-medium text-lg mb-2"
                            onClick={handleMenuToggle}
                        >
                            {el.title}
                        </a>
                    );
                })}
                <div className="self-center my-2">
                    <a
                        className="rounded-full border-2 border-blue-500 px-6 py-1 text-lg bg-blue-500 text-white"
                        href={Bio.github}
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        My Github
                    </a>
                </div>
            </div>
        </div>
    );
};
