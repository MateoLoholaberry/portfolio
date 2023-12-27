import React from "react";

export const EducationCard = ({ education }) => {
    return (
        <div className="flex gap-4 w-full max-w-screen-md justify-center">
            <div className="flex flex-col border-2 border-blue-500 rounded-xl p-6 gap-2 shadow-lg shadow-blue-500/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20 transition duration-300">
                <div className="flex gap-2">
                    <img
                        src={education.img}
                        alt={`${education.school} logo`}
                        width={60}
                        height={60}
                        className="self-start rounded-md"
                    />
                    <div className="flex flex-col">
                        <h4 className="text-xl font-bold">
                            {education.school}
                        </h4>
                        <p className="text-gray-600">{education.degree}</p>
                        <p className="text-gray-400 text-sm">
                            {education.date}
                        </p>
                    </div>
                </div>
                <div>
                    <p className="">
                        <span className="font-bold">Grade</span>:{" "}
                        {education.grade}
                    </p>
                    <p className="my-2">{education.description}</p>
                </div>
            </div>
            <div className="flex flex-col items-center gap-2">
                <div className="w-3 h-3 border-blue-800 border-2 rounded-full"></div>
                <div className="w-2 border-blue-800 border-2 rounded-full grow"></div>
            </div>
        </div>
    );
};
