export const SkillsCard = ({ title, listSkills }) => {
    return (
        <div className="bg-transparent py-5 px-9 rounded-xl border-cyan-500 border-2 shadow-lg shadow-cyan-500/50">
            <h2 className="text-3xl font-bold text-center mb-4">{title}</h2>
            <div className="flex flex-wrap gap-4 justify-center items-center">
                {listSkills.map((el) => {
                    return (
                        <div key={el.name}>
                            <div className="border-2 border-black flex gap-2 py-3 px-4 rounded-xl items-center hover:scale-105">
                                <img width={30} src={el.image} alt={el.name} />
                                <h3 className="text-lg">{el.name}</h3>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
