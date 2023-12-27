import { education } from "../data/constants";
import { EducationCard } from "./EducationCard";

export const Education = () => {
    return (
        <div
            id="education"
            className="pt-24 px-8 flex items-center justify-center"
        >
            <div className="w-full max-w-screen-2xl">
                <h2 className="text-4xl font-bold text-center mb-4">
                    Education
                </h2>
                <p className="text-xl text-center max-w-screen-md m-auto">
                    My education has been a journey of self-discovery and
                    growth.
                </p>

                <div className="w-full flex items-center justify-center flex-col gap-4 py-8">
                    {education.map((el) => (
                        <EducationCard key={el.id} education={el} />
                    ))}
                </div>
            </div>
        </div>
    );
};
