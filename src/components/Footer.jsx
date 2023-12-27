import { Bio, titleLinks } from "../data/constants";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const Footer = () => {
    return (
        <footer className="pt-20 flex flex-col gap-6 items-center justify-center bg-gray-400 my-clip-path2">
            <h3 className="font-bold text-center text-2xl bg-clip-text text-transparent bg-gradient-to-tr from-cyan-600 to-blue-700">
                Mateo Loholaberry
            </h3>
            <nav className="flex flex-wrap justify-center gap-6">
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
            <div className="flex gap-8 text-2xl">
                <a
                    href={Bio.linkedin}
                    className="hover:text-blue-600 transition duration-300"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <FaLinkedin />
                </a>
                <a
                    href={Bio.github}
                    className="hover:text-blue-600 transition duration-300"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <FaGithub />
                </a>
            </div>
            <div className="mb-8 mt-4">
                <p className="text-gray-700 text-center">
                    © 2023 Mateo Loholaberry. All rights reserved.
                </p>
            </div>
        </footer>
    );
};
