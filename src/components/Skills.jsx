import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {

    const skillCategories = [

        {
            title: "Programming Languages",
            skills: [
                "Python",
                "C",
                "C++",
                "Java",
                "JavaScript"
            ]
        },

        {
            title: "Artificial Intelligence",

            skills: [
                "Machine Learning",
                "Deep Learning",
                "Natural Language Processing",
                "Speech Processing",
                "Transformer Models",
                "Classification",
                "Regression",
                "Feature Engineering"
            ]
        },

        {
            title: "AI Security",

            skills: [
                "Threat Detection",
                "Fraud Detection",
                "Anomaly Detection",
                "Secure AI Systems",
                "Authentication Systems",
                "Risk Analysis",
                "Threat Intelligence"
            ]
        },

        {
            title: "Backend Development",

            skills: [
                "Node.js",
                "Express.js",
                "REST APIs",
                "FastAPI",
                "Authentication"
            ]
        },

        {
            title: "Frontend Development",

            skills: [
                "React.js",
                "HTML",
                "CSS",
                "Responsive Design"
            ]
        },

        {
            title: "Frameworks & Libraries",

            skills: [
                "TensorFlow",
                "Scikit-learn",
                "OpenCV",
                "Whisper",
                "Pandas",
                "NumPy"
            ]
        },

        {
            title: "Databases",

            skills: [
                "MongoDB",
                "PostgreSQL"
            ]
        },

        {
            title: "Tools & Platforms",

            skills: [
                "Git",
                "GitHub",
                "Postman",
                "VS Code",
                "Docker",
                "Linux",
                "Figma"
            ]
        }

    ];

    const containerVariants = {

        hidden: {
            opacity: 0
        },

        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }

    };

    const itemVariants = {

        hidden: {
            opacity: 0,
            y: 20
        },

        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }

    };

    return (

        <section
            className="section container"
            id="skills"
        >

            <div className="section-header">

                <motion.h2
                    className="heading-lg"
                    initial={{
                        opacity: 0,
                        y: 20
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}

                    viewport={{
                        once: true
                    }}

                    transition={{
                        duration: 0.5
                    }}
                >

                    Technical Skills

                </motion.h2>

                <motion.div
                    className="section-line"
                    initial={{
                        width: 0
                    }}

                    whileInView={{
                        width: '100px'
                    }}

                    viewport={{
                        once: true
                    }}

                    transition={{
                        duration: 0.5,
                        delay: 0.2
                    }}
                />

            </div>

            <motion.div
                className="skills-grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{
                    once: true,
                    margin: "-100px"
                }}
            >

                {skillCategories.map((category, idx) => (

                    <motion.div
                        key={idx}
                        className="skill-category glass-panel"
                        variants={itemVariants}
                    >

                        <h3 className="category-title">

                            {category.title}

                        </h3>

                        <div className="skill-tags">

                            {category.skills.map((skill, i) => (

                                <span
                                    key={i}
                                    className="skill-tag text-secondary"
                                >

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
