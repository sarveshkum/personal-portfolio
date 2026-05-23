import { motion } from 'framer-motion';
import { ShieldCheck, BrainCircuit, Network } from 'lucide-react';
import './About.css';

const About = () => {
    const highlightFeatures = [
        {
            icon: <ShieldCheck size={24} className="accent-blue" />,
            title: "AI Security Engineering",
            description: "Building secure AI systems focused on fraud detection, anomaly detection, threat intelligence, and intelligent security workflows."
        },
        {
            icon: <Network size={24} className="accent-cyan" />,
            title: "Scalable Secure Systems",
            description: "Designing scalable backend architectures and production-ready systems with reliability, authentication, and real-time processing."
        },
        {
            icon: <BrainCircuit size={24} className="accent-purple" />,
            title: "Machine Learning & Intelligence",
            description: "Developing NLP pipelines, Transformer models, speech intelligence systems, and real-world AI applications."
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
                        I am <strong>Sarvesh Kumar S S</strong>, an AI Security Engineer and Machine Learning enthusiast based in Coimbatore, India. I specialize in developing intelligent systems that combine Artificial Intelligence, Cybersecurity, and scalable software engineering.
                    </p>

                    <p>
                        My experience includes designing and implementing AI-powered fraud detection systems, intelligent threat analysis platforms, speech processing applications, and secure backend architectures. I focus on solving real-world challenges using data-driven approaches and intelligent technologies.
                    </p>

                    <p>
                        I am passionate about building secure AI systems that bridge the gap between advanced research and practical deployment while ensuring reliability, performance optimization, and seamless user experiences.
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
                            transition={{
                                duration: 0.5,
                                delay: 0.2 + (idx * 0.1)
                            }}
                        >

                            <div className="highlight-icon">
                                {feature.icon}
                            </div>

                            <h3 className="highlight-title">
                                {feature.title}
                            </h3>

                            <p className="highlight-desc text-secondary">
                                {feature.description}
                            </p>

                        </motion.div>

                    ))}

                </div>
            </div>
        </section>
    );
};

export default About;
