import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: "Programming",
            skills: ["C", "C++", "Java", "Python", "JavaScript"]
        },
        {
            title: "Backend",
            skills: ["Node.js", "Express.js", "NestJS", "REST APIs"]
        },
        {
            title: "Frontend",
            skills: ["React.js", "Next.js", "Angular", "HTML", "CSS"]
        },
        {
            title: "Databases",
            skills: ["MongoDB", "PostgreSQL"]
        },
        {
            title: "Machine Learning",
            skills: ["ML pipelines", "Inference systems", "OCR", "Prediction models"]
        },
        {
            title: "Tools",
            skills: ["Git", "VS Code", "Figma", "Tinkercad"]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section className="section container" id="skills">
            <div className="section-header">
                <motion.h2
                    className="heading-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Technical Skills
                </motion.h2>
                <motion.div
                    className="section-line"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100px' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                ></motion.div>
            </div>

            <motion.div
                className="skills-grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
            >
                {skillCategories.map((category, idx) => (
                    <motion.div key={idx} className="skill-category glass-panel" variants={itemVariants}>
                        <h3 className="category-title">{category.title}</h3>
                        <div className="skill-tags">
                            {category.skills.map((skill, i) => (
                                <span key={i} className="skill-tag text-secondary">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Skills;
