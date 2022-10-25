import "./Contact.css";

const Contact = () => {
    return (
        <section className="contact">
            <h1 className="contact__title">Laten we eens in gesprek gaan</h1>
            <a href="mailto:jaap@madebyjaap.nl" className="contact__item">
                <h3>Stuur me een email:</h3>
                <figure className="mail">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z">
                        </path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                </figure>
            </a>
            <a href="https://www.linkedin.com/in/jaapreerink/" className="contact__item">
                <h3>Of stuur me een bericht op LinkedIn:</h3>
                <figure className="linkedIn">
                    <svg
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentcolor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="feather feather-linkedin">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z">
                        </path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                </figure>
            </a>
        </section>
    )
}

export default Contact;