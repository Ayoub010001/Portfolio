import Tag from "../components/Tag"

import {experiences} from '../assets/data.json'
import { motion,useInView } from "framer-motion"
import { useRef } from "react";

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

function Experiences() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section id="experiences">
    <div className="max-width">
      <p className="section--title"><span className="green-text">03.</span> Experience</p> 
      <div className="ml-18">
        <div className="experiences-container">
          
          {
            experiences.map((experience, index)=>(
                <div
                ref={ref}
                style={{
                  transform: isInView ? "none" : "translateX(-200px)",
                  opacity: isInView ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
                }}
                
                key={index} className="experience-layout">
                  <p className="experience-info">{experience.company}</p>
                  <div className="experience-details">
                      <h3 className="card-main-title">{experience.title}</h3>
                      <p className="green-sub-title">{experience.post}</p>
                      <p className="experience-info">{experience.duration}</p>
                      <div className="card-desc-container">
                        <p className="card-desc" dangerouslySetInnerHTML={{ __html: experience.description }} />
                      </div>
                      <motion.div className="tags-container"
                                      variants={container}
                                      initial="hidden"
                                      animate="visible"
                      >
                        {
                          experience.skills.map((skill, index)=>{
                            return <Tag key={index} skill={skill}/>
                          })
                        }
                      </motion.div>
                  </div>
                </div>
            ))
          }
        </div>
      </div>
    </div>
  </section>
  )
}

export default Experiences