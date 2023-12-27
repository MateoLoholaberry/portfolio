import { useState } from "react";
import { projects } from "../data/constants";
import { ProjectCard } from "./ProjectCard";
import { ProjectCardModal } from "./ProjectCardModal";

export const Projects = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [projectSelected, setProjectSelected] = useState({});

    const openModal = (project) => {
        setProjectSelected(project);
        setModalIsOpen(true);
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        document.body.style.overflow = "visible";
        setModalIsOpen(false);
    };
    return (
        <>
            <div
                id="projects"
                className="pt-24 px-10 mt-2 flex items-center justify-center"
            >
                <div className="w-full max-w-screen-2xl">
                    <h2 className="text-4xl font-bold text-center mb-4">
                        Projects
                    </h2>
                    <p className="text-xl text-center max-w-screen-md m-auto mb-8">
                        I have worked on a wide range of projects. From web apps
                        to android apps. Here are some of my projects.
                    </p>
                    <div className="flex justify-center items-center flex-wrap gap-8">
                        {projects.map((el) => {
                            return (
                                <ProjectCard
                                    key={el.id}
                                    project={el}
                                    openModal={openModal}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>

            <ProjectCardModal
                project={projectSelected}
                closeModal={closeModal}
                isOpen={modalIsOpen}
            />
        </>
    );
};
