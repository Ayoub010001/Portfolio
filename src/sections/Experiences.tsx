import Tag from "../components/Tag"

import {experiences} from '../assets/data.json'


function Experiences() {
  return (
    <section>
    <div className="max-width">
      <p className="section--title"><span className="green-text">03.</span> Experience</p> 
      <div className="ml-18">
        <div className="experiences-container">
          
          {
            experiences.map((experience, index)=>(
                <div key={index} className="experience-layout">
                  <p className="experience-info">{experience.company}</p>
                  <div className="experience-details">
                      <h3 className="card-main-title">{experience.title}</h3>
                      <p className="green-sub-title">{experience.post}</p>
                      <p className="experience-info">{experience.duration}</p>
                      <div className="card-desc-container">
                        <p className="card-desc">{experience.description}</p>
                      </div>
                      <div className="tags-container">
                        {
                          experience.skills.map((skill, index)=>{
                            return <Tag key={index} skill={skill}/>
                          })
                        }
                      </div>
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