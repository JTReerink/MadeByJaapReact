import Navigation from "../Components/Navigation/Navigation";
import Background from "../Components/Background/Background";
import Header from "../Components/Header/Header";
import Projects from "../Components/Projects/Projects";
import Contact from "../Components/Contact/Contact";
import About from "../Components/About/About";
import "./App.css";

const App = () => {
    return (
        <>
            <Navigation />
            <Background />
            <Header />
            <Projects/>
            <About />
            <div className="blog" id="blog">
                <iframe src="http://blog.madebyjaap.nl" className="blog__frame"></iframe>
            </div>
            <Contact />
        </>
    )
};

export default App;