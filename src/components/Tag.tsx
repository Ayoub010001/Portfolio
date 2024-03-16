import { motion,useInView } from "framer-motion"
import { useRef } from "react";


const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

interface Skill{
  skill:string
}


function Tag({skill}: Skill) {
  return (
    <motion.div className="tag item"variants={item}>
        <p className="tag-Name">{skill}</p>
    </motion.div>
  )
}

export default Tag