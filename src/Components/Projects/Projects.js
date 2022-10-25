import Cards from "../Cards/Cards";
import "./Projects.css";

const Projects = () => {
    return(
        <section className="projects" id="projects">
            <Cards path="./ProjectData/OnlineAdventureGame.md"/>
            <Cards path="./ProjectData/FeelingFeedback.md" />
            <Cards path="./ProjectData/ThigmoGarden.md" />
        </section>
    )
};

export default Projects;