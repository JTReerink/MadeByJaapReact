import "./Header.css";

const Header = () => {
    return(
        <header className="header">
            <div className="header__title-holder">
                <h1 className="header__title">Jaap Reerink</h1>
                <p className="header__subtitle">Future Software Developer</p>
            </div>
            <a href="#projects" className="header__arrow"><img src="./media/arrow-down.svg" alt="Arrow" /></a>
        </header>
    )
};

export default Header;