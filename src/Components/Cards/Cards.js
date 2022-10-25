import "./Cards.css";

import gm from "gray-matter";
import { marked } from "marked";

import { useEffect, useRef, useState } from "react";
import Cursor from "../Cursor/Cursor";

window.Buffer = window.Buffer || require("buffer").Buffer; 

const Cards = (props) => {
    const [data, setData] = useState({});
    const [mouseData, setMouseData] = useState({
        isHovering: false,
        x: 0,
        y: 0,
    });
    
    const [styleData, setStyleData] = useState({
        turned: false
    })

    const changeStyle = event => {
        console.log(event)
    }

    const ref = useRef(null);

    const mouseMove = event => {
        const rect = ref.current.getBoundingClientRect();

        setMouseData({
            isHovering: true,
            x: event.clientX - rect.x,
            y: event.clientY - rect.y-10
        });
    }

    const mouseLeave = () => {
        setMouseData({
            isHovering: false,
            x: 0,
            y: 0
        });
    }

    useEffect(() => {   
        let isSubscribed = true;

        const fetchData = async () => {
            let raw = props.path && await fetch(props.path).then(response => response.text());
            
            if(!raw) {
                console.error("Can't fetch project :((((((");
                return;
            }

            let { content: rawContent, data } = gm(raw);

            data.content = marked.parse(rawContent);

            isSubscribed && setData(data);
        }

        fetchData();

        return () => isSubscribed = false;
    }, []);

    return (
        <article className="card" onClick={changeStyle}  onMouseMove={mouseMove} onMouseLeave={mouseLeave} ref={ref}>
            {/* <Cursor name="Click me" mouseData = {mouseData} /> */}
            <div className="card__inner">
                <div className="card__voorkant">
                    <figure className="card__voorkant--figure">
                        <img src={data.foto} alt={data.title} />
                    </figure>
                </div>
                <div className="card__achterkant">
                    <h1 className="card__title">{data.title}</h1>
                    <div className="card__inhoud" dangerouslySetInnerHTML={{__html: data.content}}></div>
                </div>
            </div>
        </article>
    )
};

export default Cards;