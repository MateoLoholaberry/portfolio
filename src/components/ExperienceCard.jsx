import React from "react";

export const ExperienceCard = ({ experience }) => {
    return (
        <div className="flex gap-4 w-full max-w-screen-md justify-center">
            <div className="flex flex-col items-center gap-2">
                <div className="w-3 h-3 border-blue-800 border-2 rounded-full"></div>
                <div className="w-2 border-blue-800 border-2 rounded-full grow"></div>
            </div>
            <div className="flex flex-col border-2 border-blue-500 rounded-xl p-6 gap-2 shadow-lg shadow-blue-500/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20 transition duration-300">
                <div className="flex gap-2">
                    <img
                        src={experience.img}
                        alt={`${experience.company} logo`}
                        width={60}
                        height={60}
                        className="self-start rounded-md"
                    />
                    <div className="flex flex-col">
                        <h4 className="text-xl font-bold">{experience.role}</h4>
                        <p className="text-gray-600">{experience.company}</p>
                        <p className="text-gray-400 text-sm">
                            {experience.date}
                        </p>
                    </div>
                </div>
                <div>
                    <p className="mb-2 whitespace-pre-wrap">
                        {experience.description}
                    </p>
                    <div className="flex gap-2 justify-start">
                        <p className="font-bold">Skills:</p>
                        <div className="flex flex-wrap">
                            {experience.skills.map((el) => {
                                return (
                                    <div
                                        key={el}
                                        className="px-2 text-gray-700 flex items-center"
                                    >
                                        <span className="text-lg mr-1">•</span>
                                        <span>{el}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
