import ReactModal from "react-modal";
import { IoClose } from "react-icons/io5";

export const ProjectCardModal = ({ project, closeModal, isOpen }) => {
    ReactModal.setAppElement("#root");

    const parentElement = () => {
        const root = document.getElementById("root");
        return root;
    };

    return (
        <>
            <ReactModal
                isOpen={isOpen}
                onRequestClose={closeModal}
                style={{
                    overlay: {
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        zIndex: 999,
                    },
                    content: {
                        height: "90%",
                        width: "75%",
                        margin: "auto",
                        maxHeight: "1000px",
                        maxWidth: "900px",
                        paddingTop: "10px",
                    },
                }}
                parentSelector={parentElement}
            >
                <div className="flex flex-col items-center justify-center">
                    <div
                        className="self-end mb-[10px] cursor-pointer"
                        onClick={closeModal}
                    >
                        <IoClose size={30} />
                    </div>
                    <div className="max-w-screen-2xl">
                        <img
                            src={project.img}
                            alt=""
                            className="rounded-md object-cover"
                        />
                        <div className="flex flex-wrap w-full gap-2 items-center my-4">
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
                            <h4 className="text-3xl font-bold">
                                {project.title}
                            </h4>
                            <p className="text-gray-400">{project.date}</p>
                            <p className="mt-1 mb-4">{project.description}</p>
                        </div>
                        <div className="flex w-full justify-center gap-10 text-center">
                            {project.repo && (
                                <a
                                    href="#"
                                    className="bg-blue-400 px-4 py-2 grow rounded-lg text-lg font-semibold hover:bg-blue-500 transition duration-300 max-w-[600px]"
                                >
                                    View Code
                                </a>
                            )}
                            {project.webapp && (
                                <a
                                    href="#"
                                    className="bg-blue-400 px-4 py-2 grow rounded-lg text-lg font-semibold hover:bg-blue-500 transition duration-300 max-w-[600px]"
                                >
                                    View Live App
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </ReactModal>
        </>
    );
};
