import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            company: "C-DAC Chennai",
            role: "Research Intern",
            period: "Recent",
            description: "Developing cybersecurity systems leveraging deep learning techniques.",
            achievements: [
                "Built ML-based threat detection pipelines.",
                "Optimized system reliability and performance for threat analysis."
            ]
        },
        {
            company: "Laboneft Pvt Ltd",
            role: "ML & Software Intern",
            period: "Past",
            description: "Collaborated on full-stack and machine learning solutions for business applications.",
            achievements: [
                "Implemented robust backend business logic and REST APIs.",
                "Developed and integrated a sales prediction ML system."
            ]
        }
    ];

    return (
        <section className="section container" id="experience">
            <div className="section-header">
                <motion.h2
                    className="heading-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Internship Experience
                </motion.h2>
                <motion.div
                    className="section-line"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100px' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                ></motion.div>
            </div>

            <div className="timeline-container">
                {experiences.map((exp, idx) => (
                    <motion.div
                        key={idx}
                        className="timeline-item"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: idx * 0.2 }}
                    >
                        <div className="timeline-dot">
                            <Briefcase size={16} />
                        </div>

                        <div className="timeline-content glass-panel">
                            <div className="timeline-header">
                                <div>
                                    <h3 className="timeline-role">{exp.role}</h3>
                                    <h4 className="timeline-company">{exp.company}</h4>
                                </div>
                                <div className="timeline-period">
                                    <Calendar size={14} /> {exp.period}
                                </div>
                            </div>

                            <p className="timeline-desc text-secondary">
                                {exp.description}
                            </p>

                            <ul className="timeline-achievements">
                                {exp.achievements.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
