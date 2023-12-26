import { Experience } from "./components/Experience";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

const App = () => {
    return (
        <>
            <Header></Header>
            <Hero></Hero>
            <Skills></Skills>
            <Experience></Experience>
            <Projects></Projects>
        </>
    );
};

export default App;
