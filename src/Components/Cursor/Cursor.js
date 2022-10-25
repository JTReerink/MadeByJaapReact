import "./Cursor.css";

const Cursor = (props) => {
    return(
        <div className={props.mouseData.isHovering ? "cursor shown" : "cursor"} style={{left: props.mouseData.x, top: props.mouseData.y}} >
            <p className="cursor__text">{props.name}</p>
        </div>
    )
};

export default Cursor;