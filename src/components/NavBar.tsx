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
        animate="visible">

        <motion.li variants={item}>
          <a href="#projects">
            <span className="green-text">01.</span>Projects
          </a>
        </motion.li>
        <motion.li variants={item}>
          <a href="#skills">
            <span className="green-text">02.</span>Skills
          </a>
        </motion.li>
        <motion.li variants={item}>
          <a href="#experiences">
            <span className="green-text">03.</span>experiences
          </a>
        </motion.li>
        <motion.li variants={item}>
          <a href="#certifications">
            <span className="green-text">04.</span>Certifications
          </a>
        </motion.li>
        <motion.li variants={item}>
          <a href="#contacts">
            <span className="green-text">05.</span>Contacts
          </a>
        </motion.li>
      </motion.ul>
    </nav>
  )
}

export default NavBar