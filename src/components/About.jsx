import { motion } from 'framer-motion';
import { Terminal, Cpu, Layers } from 'lucide-react';
import './About.css';

const About = () => {
    const highlightFeatures = [
        {
            icon: <Terminal size={24} className="accent-blue" />,
            title: "Backend Engineering",
            description: "Architecting reliable and high-performance server-side applications using Node.js, Express, and NestJS."
        },
        {
            icon: <Layers size={24} className="accent-cyan" />,
            title: "Scalable Architectures",
            description: "Designing systems that gracefully handle increasing loads, focusing on robust database schemas and modularity."
        },
        {
            icon: <Cpu size={24} className="accent-purple" />,
            title: "Applied Machine Learning",
            description: "Integrating ML models, NLP pipelines, and OCR engines into production-ready software systems."
        }
    ];

    return (
        <section className="section container" id="about">
            <div className="section-header">
                <motion.h2
                    className="heading-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    About Me
                </motion.h2>
                <motion.div
                    className="section-line"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100px' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                ></motion.div>
            </div>

            <div className="about-content">
                <motion.div
                    className="about-text glass-panel"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p>
                        I am a Software Engineer based in Coimbatore, India, specializing in Backend Systems and AI/ML Architectures.
                        My engineering philosophy centers around first-principles thinking: breaking down complex problems and building robust, scalable solutions from the ground up.
                    </p>
                    <p>
                        With a strong foundation in modern backend technologies and applied machine learning, I have developed intelligent systems ranging from AI-powered fraud detection to medical document processing and rule-based proctoring.
                    </p>
                    <p>
                        I am passionate about bridging the gap between cutting-edge AI research and real-world software engineering, ensuring system reliability, performance optimization, and seamless user experiences.
                    </p>
                </motion.div>

                <div className="about-highlights">
                    {highlightFeatures.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            className="highlight-card glass-panel"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 + (idx * 0.1) }}
                        >
                            <div className="highlight-icon">
                                {feature.icon}
                            </div>
                            <h3 className="highlight-title">{feature.title}</h3>
                            <p className="highlight-desc text-secondary">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
