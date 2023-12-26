import React from "react";

export const ProjectCard = ({ project, handleModal }) => {
    return (
        <div
            className="w-80 h-[480px] cursor-pointer border-2 border-cyan-500 shadow-lg shadow-cyan-500/50 rounded-xl px-5 py-6 flex flex-col gap-3 hover:-translate-y-2 hover:brightness-105 transition duration-300 hover:shadow-xl hover:shadow-cyan-900"
            onClick={(el) => handleModal(project)}
        >
            <img src={project.img} alt="" className="rounded-md object-cover" />
            <div className="flex flex-wrap w-full gap-2 items-center">
                {project.tags.map((el) => {
                    return (
                        <div
                            key={el}
                            className="px-2 py-1 bg-blue-200 rounded-full text-xs text-blue-700"
                        >
                            {el}
                        </div>
                    );
                })}
            </div>
            <div>
                <h4 className="text-xl font-bold">{project.title}</h4>
                <p className="text-sm text-gray-400">{project.date}</p>
                <p className="mt-1 line-clamp-4">{project.description}</p>
            </div>
        </div>
    );
};
