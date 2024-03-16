import { motion} from "framer-motion"

interface Skill{
  skill:string
}


function Tag({skill}: Skill) {
  return (
    <motion.div className="tag" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
        <p className="tag-Name">{skill}</p>
    </motion.div>
  )
}

export default Tag