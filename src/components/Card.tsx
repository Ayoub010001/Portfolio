import Tag from './Tag'
import { useInView } from "framer-motion"
import { FiExternalLink } from "react-icons/fi";

import { useRef } from "react";

interface Project{
    image:string,
    title:string,
    post:string,
    description:string,
    live:string,
    skills:string[]
}

interface CardProps {
    prj: Project; // Expecting a single project
}

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
                    <p className="card-desc" dangerouslySetInnerHTML={{ __html: prj.description }}/>
                    {
                      prj.live !== "" && <div className='card-link'>
                        <a target='_blank' href={prj.live}><p className='green-text'>Live version <FiExternalLink /></p></a>
                      </div>
                    }
  
                </div>
                <div className="tags-container">
                {
                    prj.skills.map((skill, index)=>{
                        return <Tag key={index} skill={skill}/>
                    })
                }
                </div>
            </div>
        </div>

    </div>
  )
}

export default Card