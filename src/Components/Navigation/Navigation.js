import "./Navigation.css";

const Navigation = () => {
    return(
        <nav className="navigation">
            <div className="navigation__titleHolder">
                <h1 className="navigation__title">MadeByJaap</h1>
            </div>
            <div className="navigation__main">
                <a href="" className="navigation__main--link"><svg className="dots" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle></svg> Home</a>
                <a href="" className="navigation__main--link"><svg className="dots" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle></svg> Projecten</a>
                <a href="" className="navigation__main--link"><svg className="dots" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle></svg> Over</a>
                <a href="" className="navigation__main--link"><svg className="dots" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle></svg> Blog</a>
                <a href="" className="navigation__main--link"><svg className="dots" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle></svg> Contact</a>
            </div>
            <div className="navigation__socialButtons">
                <a href="mailto:jareerink@gmail.com"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></a>
                <a href="https://www.linkedin.com/in/jaapreerink/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
            </div>

        </nav>
    )
};

export default Navigation;