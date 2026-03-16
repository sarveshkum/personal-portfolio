import { motion } from 'framer-motion';
import { Award, FileBadge, Users } from 'lucide-react';
import './Accomplishments.css';

const Accomplishments = () => {
    const certifications = [
        "NVIDIA Deep Learning Institute",
        "NPTEL Privacy and Security",
        "Skyscanner Forage",
        "Accenture Forage",
        "JPMorgan Forage",
        "MERN Full Stack Training"
    ];

    const leadership = [
        { role: "Executive Member", org: "IEEE, ACE, Phorartz Club, SREC Library Club" },
        { role: "Treasurer", org: "Reading Movement SREC" }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section className="section container" id="accomplishments">
            <div className="section-header">
                <motion.h2
                    className="heading-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Accomplishments
                </motion.h2>
                <motion.div
                    className="section-line"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100px' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                ></motion.div>
            </div>

            <div className="acc-grid">
                {/* Cerifications */}
                <motion.div
                    className="acc-card glass-panel"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="acc-header">
                        <FileBadge size={28} className="acc-icon" />
                        <h3>Certifications</h3>
                    </div>
                    <motion.ul className="acc-list" variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }}>
                        {certifications.map((cert, idx) => (
                            <motion.li key={idx} variants={itemVariants} className="acc-item">
                                <span className="acc-bullet"></span>
                                {cert}
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>

                <div className="acc-col">
                    {/* Achievements */}
                    <motion.div
                        className="acc-card glass-panel mb-2"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <div className="acc-header">
                            <Award size={28} className="acc-icon" />
                            <h3>Achievements</h3>
                        </div>
                        <div className="acc-achievement">
                            <div className="achievement-title">Best Mini Project of the Year</div>
                        </div>
                    </motion.div>

                    {/* Leadership */}
                    <motion.div
                        className="acc-card glass-panel"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="acc-header">
                            <Users size={28} className="acc-icon" />
                            <h3>Leadership</h3>
                        </div>
                        <div className="leadership-list">
                            {leadership.map((item, idx) => (
                                <div key={idx} className="leadership-item">
                                    <div className="leadership-role">{item.role}</div>
                                    <div className="leadership-org text-secondary">{item.org}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Accomplishments;
