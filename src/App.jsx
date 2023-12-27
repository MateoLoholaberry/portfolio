import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Form } from "./components/Form";
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
            <Education></Education>
            <Form></Form>
            <Footer></Footer>
        </>
    );
};

export default App;
