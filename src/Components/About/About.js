import "./About.css";

const About = () => {
    return (
        <section className="about" id="about">
            <div className="about__text">
                <p className="about__text--inhoud">
                    Ik ben dus <strong style={{color: "var(--hover)"}}>Jaap Reerink</strong>. <br />
                    Een <strong>Software development</strong> student aan het MediaCollege Amsterdam. Momenteel bezig met front-end development. 
                    Ook wil ik mij nog gaan verdiepen in <strong>Project management</strong> waarmee ik na deze opleiding verder mee gaan.
                </p>
                <p className="about__text--inhoud">
                    Tijdens het mijn opleiding vond ik het heel leuk om te werken met <strong>Html, CSS, JS en React</strong> voor front-end, <strong>C#</strong> i.c.m. Unity 
                    en ook werken met <strong>NodeMCU's</strong> en <strong>Arduinos</strong> vond ik heel interessant.
                </p>
            </div>
            <figure className="about__figure">
                <img src="./media/sunflowers.jpg" alt="" className="about__img" />
            </figure>
        </section>
    )
};

export default About;