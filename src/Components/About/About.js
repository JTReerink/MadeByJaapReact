import "./About.css";

const About = () => {
    return (
        <section className="about" id="about">
            <div className="about__text">
                <p className="about__text--inhoud">
                    Mijn naam is dus Jaap Reerink. <br />
                    Momenteel een <strong>Software development</strong> student aan het MediaCollege Amsterdam.
                    Mijn sterke kant is echter meer mijn sociale kant. Zo ben ik tijdens en naast mijn studie mezelf aan het verdiepen in <strong>Project management</strong>. <br />
                </p>
                <p className="about__text--inhoud">
                    Na mijn studie zie ik mijzelf werken als tussenpersoon voor developers en opdrachtgevers.
                </p>
            </div>
            <figure className="about__figure">
                <img src="./media/sunflowers.jpg" alt="" className="about__img" />
            </figure>
        </section>
    )
};

export default About;