import { motion } from 'framer-motion';
import {
    ExternalLink,
    Github,
    Shield,
    BrainCircuit,
    ScanSearch,
    Activity,
    Network,
    AlertTriangle
} from 'lucide-react';

import './Projects.css';

const Projects = () => {

    const projects = [

        {
            title: "AI-Powered Vishing Detection System",
            description:
                "Developed a multilingual voice fraud detection platform using Whisper and Transformer models for phishing classification, trust score generation, and real-time threat analysis.",

            techStack: [
                "Python",
                "Whisper",
                "Transformer",
                "FastAPI",
                "MongoDB"
            ],

            architecture:
                "Real-time AI inference and threat analysis pipeline",

            icon:
                <BrainCircuit
                    size={32}
                    className="project-icon-color"
                />,

            github:
                "https://github.com/Sarvesh-Kumar-S-S",

            featured: true
        },

        {
            title: "Insurance Scam Detection System",

            description:
                "Built an intelligent fraud detection system capable of identifying suspicious insurance claims through machine learning classification and risk analysis workflows.",

            techStack: [
                "Python",
                "Scikit-learn",
                "Machine Learning",
                "Pandas"
            ],

            architecture:
                "Fraud analysis prediction pipeline",

            icon:
                <AlertTriangle
                    size={32}
                    className="project-icon-color"
                />,

            github:
                "https://github.com/Sarvesh-Kumar-S-S"
        },

        {
            title: "Medical OCR System",

            description:
                "Developed OCR-based intelligent document processing system for extracting structured medical information using image preprocessing techniques.",

            techStack: [
                "Python",
                "OpenCV",
                "TensorFlow",
                "OCR"
            ],

            architecture:
                "Image processing workflow",

            icon:
                <ScanSearch
                    size={32}
                    className="project-icon-color"
                />,

            github:
                "https://github.com/Sarvesh-Kumar-S-S"
        },

        {
            title: "Online Exam Proctoring System",

            description:
                "Created an intelligent monitoring platform for authentication, suspicious activity detection, and real-time alert generation.",

            techStack: [
                "React",
                "Node.js",
                "MongoDB",
                "WebRTC"
            ],

            architecture:
                "Event-driven monitoring architecture",

            icon:
                <Activity
                    size={32}
                    className="project-icon-color"
                />,

            github:
                "https://github.com/Sarvesh-Kumar-S-S"
        },

        {
            title: "Service Management Platform",

            description:
                "Developed a role-based workflow management system with secure authentication and centralized task management.",

            techStack: [
                "Node.js",
                "Express",
                "MongoDB",
                "React"
            ],

            architecture:
                "REST API backend architecture",

            icon:
                <Network
                    size={32}
                    className="project-icon-color"
                />,

            github:
                "https://github.com/Sarvesh-Kumar-S-S"
        },

        {
            title: "Sales Prediction Platform",

            description:
                "Built a machine learning forecasting application for sales prediction using preprocessing, feature engineering, and regression techniques.",

            techStack: [
                "Python",
                "Machine Learning",
                "Regression",
                "Pandas"
            ],

            architecture:
                "Predictive analytics workflow",

            icon:
                <Shield
                    size={32}
                    className="project-icon-color"
                />,

            github:
                "https://github.com/Sarvesh-Kumar-S-S"
        }

    ];

    return (

        <section
            className="section container"
            id="projects"
        >

            <div className="section-header">

                <motion.h2
                    className="heading-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >

                    Featured Projects

                </motion.h2>

                <motion.div
                    className="section-line"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100px' }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.5,
                        delay: 0.2
                    }}
                />

            </div>

            <div className="projects-grid">

                {projects.map((project, idx) => (

                    <motion.div
                        key={idx}
                        className={`project-card glass-panel ${
                            project.featured
                            ? 'project-featured'
                            : ''
                        }`}

                        initial={{
                            opacity: 0,
                            scale: 0.95
                        }}

                        whileInView={{
                            opacity: 1,
                            scale: 1
                        }}

                        viewport={{
                            once: true,
                            margin: "-50px"
                        }}

                        transition={{
                            duration: 0.5,
                            delay: idx * 0.1
                        }}
                    >

                        <div className="project-header">

                            <div className="project-icon">

                                {project.icon}

                            </div>

                            <div className="project-links">

                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link"
                                >

                                    <Github size={20} />

                                </a>

                                <a
                                    href="#"
                                    className="project-link"
                                >

                                    <ExternalLink size={20} />

                                </a>

                            </div>

                        </div>

                        <h3 className="project-title">

                            {project.title}

                        </h3>

                        <p className="project-desc text-secondary">

                            {project.description}

                        </p>

                        <div className="project-arch text-tertiary">

                            {project.architecture}

                        </div>

                        <div className="project-tech">

                            {project.techStack.map((tech, i) => (

                                <span
                                    key={i}
                                    className="tech-badge"
                                >

                                    {tech}

                                </span>

                            ))}

                        </div>

                    </motion.div>

                ))}

            </div>

        </section>
    );
};

export default Projects;
