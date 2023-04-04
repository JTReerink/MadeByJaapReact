import Cards from "../Cards/Cards";
import "./Projects.css";

const Projects = () => {
    return(
        <section className="projects" id="projects">
            <Cards path="./ProjectData/DuetDigital.md" />
            <Cards path="./ProjectData/ShyLights.md" />
            <Cards path="./ProjectData/ThigmoGarden.md" />
            <Cards path="./ProjectData/FeelingFeedback.md" />
            <Cards path="./ProjectData/PrimeColonists.md" />
            <Cards path="./ProjectData/OnlineAdventureGame.md"/>
        </section>
    )
};

export default Projects;