export const ProjectCardModal = ({ project }) => {
    return (
        <div
            className="max-w-screen-md max-h-[100vh] border-2 border-cyan-500 rounded-xl px-5 py-6 flex flex-col gap-3 bg-white absolute top-0 my-4 overflow-hidden overflow-y-visible"
            onClick={(el) => handleModal(project)}
        >
            <img src={project.img} alt="" className="rounded-md object-cover" />
            <div className="flex flex-wrap w-full gap-2 items-center">
                {project.tags?.map((el) => {
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
