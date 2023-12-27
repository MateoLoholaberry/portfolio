import { experiences } from "../data/constants";
import { ExperienceCard } from "./ExperienceCard";

export const Experience = () => {
    return (
        <div
            id="experience"
            className="pt-24 px-8 flex items-center justify-center"
        >
            <div className="w-full max-w-screen-2xl">
                <h2 className="text-4xl font-bold text-center mb-4">
                    Experience
                </h2>
                <p className="text-xl text-center max-w-screen-md m-auto">
                    My work experience as a software developer
                </p>
                <div className="w-full flex items-center justify-center flex-col gap-4 pt-8">
                    {experiences.map((el) => {
                        return <ExperienceCard key={el.id} experience={el} />;
                    })}
                </div>
            </div>
        </div>
    );
};
