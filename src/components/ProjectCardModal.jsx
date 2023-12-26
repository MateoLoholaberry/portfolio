import ReactModal from "react-modal";

export const ProjectCardModal = ({ project, openCloseModal }) => {
    return (
        <>
            <div>
                <img
                    src={project.img}
                    alt=""
                    className="rounded-md object-cover"
                />
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
        </>
    );
};
