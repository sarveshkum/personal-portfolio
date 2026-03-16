import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <p className="footer-quote text-secondary">
                    "Engineered with curiosity and first-principles thinking."
                </p>
                <p className="footer-copyright text-tertiary">
                    &copy; {new Date().getFullYear()} Sarvesh Kumar S S. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
