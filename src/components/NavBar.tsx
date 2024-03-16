import { motion } from "framer-motion";

// motion
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.4
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};


function NavBar() {
  return (
    <nav>
      <motion.ul className="nav-list"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <a href="#projects">
          <motion.li variants={item}><span className="green-text">01.</span>Projects</motion.li>
        </a>
        <a href="#skills">
          <motion.li variants={item}><span className="green-text">02.</span>Skills</motion.li>
        </a>
        <a href="#experiences">
          <motion.li variants={item}><span className="green-text">03.</span>experiences</motion.li>
        </a>
        <a href="#certifications">
          <motion.li variants={item}><span className="green-text">04.</span>Certifications</motion.li>
        </a>
        <a href="#contacts">
          <motion.li variants={item}><span className="green-text">05.</span>Contacts</motion.li>
        </a>
      </motion.ul>
    </nav>
  )
}

export default NavBar