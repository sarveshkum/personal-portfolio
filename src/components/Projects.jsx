import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers, Server, Shield, BrainCircuit, Activity, LineChart } from 'lucide-react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: "AI-Powered Vishing Detection System",
            description: "Multilingual voice fraud detection system using Whisper and ML classification. Performs real-time inference and generates an actionable trust score.",
            techStack: ["Python", "Whisper", "Machine Learning", "FastAPI"],
            architecture: "Real-time streaming inference pipeline",
            icon: <BrainCircuit size={32} className="project-icon-color" />,
            github: "https://github.com/Sarvesh-Kumar-S-S",
            featured: true
        },
        {
            title: "Online Exam Proctoring System",
            description: "Rule-based monitoring system handling authentication, suspicious activity detection, and automated alert generation for fair examinations.",
            techStack: ["Node.js", "React", "MongoDB", "WebRTC"],
            architecture: "Event-driven microservices",
            icon: <Activity size={32} className="project-icon-color" />,
            github: "https://github.com/Sarvesh-Kumar-S-S",
        },
        {
            title: "Medical OCR System",
            description: "Machine learning based text extraction from handwritten medical prescriptions utilizing a robust image preprocessing pipeline.",
            techStack: ["Python", "OpenCV", "Tesseract", "TensorFlow"],
            architecture: "Batch processing pipeline",
            icon: <Layers size={32} className="project-icon-color" />,
            github: "https://github.com/Sarvesh-Kumar-S-S",
        },
        {
            title: "Virtual ATM System",
            description: "Secure, reliable simulation of an ATM environment focusing on rigid authentication and atomic transaction logic.",
            techStack: ["Java", "Spring Boot", "PostgreSQL"],
            architecture: "Monolithic secure backend",
            icon: <Shield size={32} className="project-icon-color" />,
            github: "https://github.com/Sarvesh-Kumar-S-S",
        },
        {
            title: "Service Management System",
            description: "Comprehensive workflow management platform featuring role-based access control and systematic status tracking.",
            techStack: ["Node.js", "Express", "Tailwind CSS", "MongoDB"],
            architecture: "REST API Backend",
            icon: <Server size={32} className="project-icon-color" />,
            github: "https://github.com/Sarvesh-Kumar-S-S",
        },
        {
            title: "Food Waste Management System",
            description: "A data-driven food redistribution platform designed to connect surplus food sources with those in need.",
            techStack: ["React", "Express.js", "Machine Learning", "MongoDB"],
            architecture: "Full Stack Web Application",
            icon: <LineChart size={32} className="project-icon-color" />,
            github: "https://github.com/Sarvesh-Kumar-S-S",
        }
    ];

    return (
        <section className="section container" id="projects">
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
                    transition={{ duration: 0.5, delay: 0.2 }}
                ></motion.div>
            </div>

            <div className="projects-grid">
                {projects.map((project, idx) => (
                    <motion.div
                        key={idx}
                        className={`project-card glass-panel ${project.featured ? 'project-featured' : ''}`}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                    >
                        <div className="project-header">
                            <div className="project-icon">{project.icon}</div>
                            <div className="project-links">
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" title="Source Code">
                                    <Github size={20} />
                                </a>
                                <a href="#" className="project-link" title="Live Demo">
                                    <ExternalLink size={20} />
                                </a>
                            </div>
                        </div>

                        <h3 className="project-title">{project.title}</h3>

                        <p className="project-desc text-secondary">
                            {project.description}
                        </p>

                        <div className="project-arch text-tertiary">
                            <Layers size={14} /> {project.architecture}
                        </div>

                        <div className="project-tech">
                            {project.techStack.map((tech, i) => (
                                <span key={i} className="tech-badge">{tech}</span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
