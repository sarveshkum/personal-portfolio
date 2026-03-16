import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="section container" id="contact">
            <div className="contact-wrapper glass-panel">
                <motion.div
                    className="contact-content"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="heading-lg contact-title">Let's Connect</h2>
                    <p className="contact-desc text-secondary">
                        I am currently open to new opportunities. Whether you have a question, a project proposal, or just want to say hi, my inbox is always open. Let's build something great together.
                    </p>

                    <div className="contact-actions">
                        <a href="mailto:your.email@example.com" className="btn btn-primary btn-contact">
                            Say Hello <Send size={18} />
                        </a>
                    </div>

                    <div className="contact-socials">
                        <a href="https://github.com/Sarvesh-Kumar-S-S" target="_blank" rel="noopener noreferrer" className="contact-social-link">
                            <Github size={24} />
                        </a>
                        <a href="https://linkedin.com/in/sarvesh-kumar-s-s" target="_blank" rel="noopener noreferrer" className="contact-social-link">
                            <Linkedin size={24} />
                        </a>
                        <a href="mailto:your.email@example.com" className="contact-social-link">
                            <Mail size={24} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
