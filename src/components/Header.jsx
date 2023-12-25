import { useState, useRef } from "react";
import logo from "../assets/Mi_logo.jfif";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

export const Header = () => {
    const titleLinks = [
        {
            title: "About",
            url: "#About",
        },
        {
            title: "Skills",
            url: "#Skills",
        },
        {
            title: "Experience",
            url: "#Experience",
        },
        {
            title: "Projects",
            url: "#Projects",
        },
        {
            title: "Education",
            url: "#Education",
        },
    ];

    const [menuToggle, setMenuToggle] = useState(false);
    const navMobile = useRef(null);

    const handleMenuToggle = () => {
        if (menuToggle) {
            setMenuToggle(false);
            navMobile.current.classList.add("-top-64");
            navMobile.current.classList.remove("top-20");
        } else {
            setMenuToggle(true);
            navMobile.current.classList.remove("-top-64");
            navMobile.current.classList.add("top-20");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-20 bg-transparent sticky">
            <header className="flex justify-between w-full max-w-screen-2xl px-2 lg:px-6">
                <div className="flex items-center gap-2 cursor-pointer">
                    <img src={logo} alt="Logo" width={60} />
                    <div className="hidden lg:block hover:text-blue-500 font-medium transition-colors">
                        <p>Mateo</p>
                        <p>Loholaberry</p>
                    </div>
                </div>
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
                <div className="hidden md:block self-center">
                    <button className="rounded-full border-2 border-blue-500 text-blue-500 px-6 py-1 text-lg hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out active:bg-blue-600 whitespace-nowrap">
                        My Github
                    </button>
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
                className="absolute -top-64 flex flex-col w-full items-center justify-center bg-slate-500/50 py-3 rounded-b-lg transition-all z-50 ease-in-out duration-300 backdrop-blur-sm"
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
                <div className="self-center">
                    <button className="rounded-full border-2 border-blue-500 px-6 py-1 text-lg bg-blue-500 text-white">
                        My Github
                    </button>
                </div>
            </div>
        </div>
    );
};
