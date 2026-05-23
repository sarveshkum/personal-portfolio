import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero container" id="home">
            <div className="hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="hero-badge"
                >
                    <span className="status-dot"></span>
                    Available for new opportunities
                </motion.div>

                <motion.h1
                    className="heading-xl hero-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Hi, I'm <span className="text-gradient">Sarvesh Kumar S S</span>
                    <br />
                    Software Engineer
                </motion.h1>

                <motion.h2
                    className="hero-subtitle"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    Backend Systems | AI/ML Architectures | AI Security
                </motion.h2>

                <motion.p
                    className="hero-description text-secondary"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    "Building reliable systems, intelligent pipelines, and scalable software."
                </motion.p>

                <motion.div
                    className="hero-cta"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <a href="#projects" className="btn btn-primary">
                        View Projects <ArrowRight size={18} />
                    </a>
                    <a href="/resume.pdf" target="_blank" className="btn btn-secondary">
                        Download Resume <Download size={18} />
                    </a>
                </motion.div>

                <motion.div
                    className="hero-social"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    <a href="https://github.com/Sarvesh-Kumar-S-S" target="_blank" rel="noreferrer" className="social-link">
                        <Github size={20} /> GitHub
                    </a>
                    <a href="https://linkedin.com/in/sarvesh-kumar-s-s" target="_blank" rel="noreferrer" className="social-link">
                        <Linkedin size={20} /> LinkedIn
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
