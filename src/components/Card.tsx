import Tag from './Tag'
import { motion,useInView } from "framer-motion"
import { useRef } from "react";

interface Project{
    image:string,
    title:string,
    post:string,
    description:string,
    skills:string[]
}

interface CardProps {
    prj: Project; // Expecting a single project
}

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



function Card({prj}:CardProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  return (
    <div className="project-card" ref={ref}
    style={{
        transform: isInView ? "none" : "translateX(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
      }}
    >
        <div className="card-img-container">
            <div className='img-container' style={{backgroundImage: `url(${prj.image})`, backgroundSize: '100%'}}>
                {/* <img src={prj.image} />   */}
            </div>
        </div>
        <div className="card-text-container">
            <div className="card-text">
                <p className="green-sub-title">{prj.post}</p>
                <h3 className="card-main-title">{prj.title}</h3>
                <div className="card-desc-container">
                    <p className="card-desc">{prj.description}</p>
                </div>
                <motion.div className="tags-container container"
                variants={container}
                initial="hidden"
                animate="visible"
                >

                {
                    prj.skills.map((skill, index)=>{
                        return <Tag key={index} skill={skill}/>
                    })
                }
                </motion.div>
            </div>
        </div>

    </div>
  )
}

export default Card