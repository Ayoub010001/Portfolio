import Tag from "../components/Tag"
import {skills} from '../assets/data.json'
import { motion,useInView } from "framer-motion"
import { useRef } from "react";


interface SkillType{
  name:string,
  icon:string
}

const languages:SkillType[] = skills["Programming languages"];
const tech:SkillType[] = skills["Web Technologies - Front-end"];
const techBackEnd:SkillType[] = skills["Web Technologies - Back-end"];
const others:SkillType[] = skills.others;

function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: true });
  const ref3 = useRef(null);
  const isInView3 = useInView(ref3, { once: true });
  return (
    <section id='skills'>
      <div className="max-width">
        <p className="section--title" 
        ><span className="green-text">02.</span> Skills</p> 
        <div className="ml-18">
          <p className="section--sub-title">Here is a little bit about <span className="green-text">languages</span> ad <span className="green-text">technologies</span>. that I am currently using.</p>
          <div className="sub-section-container">
            <div className="sub-section-box">
              <p className="card-main-title">Programming languages:</p>
              <div className="skills-list"
                              ref={ref}
                              style={{
                                transform: isInView ? "none" : "translateX(-200px)",
                                opacity: isInView ? 1 : 0,
                                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
                              }}
              >
              {
                languages.map((skill,index)=>(
                  <motion.div
                  
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  whileTap={{
                    scale: 0.8,
                    rotate: -15,
                    borderRadius: "100%"
                  }}
                  
                  key={index} className="skill-box">
                    <img src={skill.icon} alt={skill.name}/>
                    <Tag skill={skill.name}/>
                  </motion.div>
                ))
              }
              </div>
            </div>

            <div className="sub-section-box">
              <p className="card-main-title">Web Technologies - Front-End:</p>
              <div className="skills-list"
                    ref={ref2}
                    style={{
                      transform: isInView2 ? "none" : "translateX(-200px)",
                      opacity: isInView2 ? 1 : 0,
                      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
                    }}
              >
              {
                tech.map((skill,index)=>(
                  <motion.div
                  
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  whileTap={{
                    scale: 0.8,
                    rotate: -15,
                    borderRadius: "100%"
                  }}
                  
                  key={index} className="skill-box">
                    <img src={skill.icon} alt={skill.name}/>
                    <Tag skill={skill.name}/>
                  </motion.div>
                ))
              }
              </div>
            </div>

            <div className="sub-section-box">
              <p className="card-main-title">Web Technologies Back-end:</p>
              <div className="skills-list"
                    ref={ref2}
                    style={{
                      transform: isInView2 ? "none" : "translateX(-200px)",
                      opacity: isInView2 ? 1 : 0,
                      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
                    }}
              >
              {
                techBackEnd.map((skill,index)=>(
                  <motion.div
                  
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  whileTap={{
                    scale: 0.8,
                    rotate: -15,
                    borderRadius: "100%"
                  }}
                  
                  key={index} className="skill-box">
                    <img src={skill.icon} alt={skill.name} width={72}/>
                    <Tag skill={skill.name}/>
                  </motion.div>
                ))
              }
              </div>
            </div>

            <div className="sub-section-box">
              <p className="card-main-title">Others:</p>
              <div className="skills-list"
                    ref={ref3}
                    style={{
                      transform: isInView3 ? "none" : "translateX(-200px)",
                      opacity: isInView3 ? 1 : 0,
                      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
                    }}
              >
              {
                others.map((skill,index)=>(
                  <motion.div

                  whileHover={{ scale: 1.2, rotate: 15 }}
                  whileTap={{
                    scale: 0.8,
                    rotate: -15,
                    borderRadius: "100%"
                  }}

                  key={index} className="skill-box">
                    <img src={skill.icon} alt={skill.name}/>
                    <Tag skill={skill.name}/>
                  </motion.div>
                ))
              }
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills