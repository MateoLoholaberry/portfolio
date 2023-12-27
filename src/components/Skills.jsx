import { skills } from "../data/constants";
import { SkillsCard } from "./SkillsCard";

export const Skills = () => {
    return (
        <div
            id="skills"
            className="pt-24 px-10 flex items-center justify-center"
        >
            <div className="w-full max-w-screen-2xl">
                <h2 className="text-4xl font-bold text-center mb-4">Skills</h2>
                <p className="text-xl text-center max-w-screen-md m-auto">
                    Here are some of my skills on which I have been working on
                    for the past 2 years.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8">
                    {skills.map((el) => {
                        return (
                            <SkillsCard
                                key={el.title}
                                title={el.title}
                                listSkills={el.skills}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
