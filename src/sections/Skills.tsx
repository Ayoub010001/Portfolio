import Tag from "../components/Tag"
import {skills} from '../assets/data.json'

interface SkillType{
  name:string,
  icon:string
}

const languages:SkillType[] = skills["Programming languages"];
const tech:SkillType[] = skills["Web Technologies"];
const others:SkillType[] = skills.others;

function Skills() {
  return (
    <section>
      <div className="max-width">
        <p className="section--title"><span className="green-text">02.</span> Skills</p> 
        <div className="ml-18">
          <p className="section--sub-title">Here is a little bit about <span className="green-text">languages</span> ad <span className="green-text">technologies</span>. that I am currently using.</p>
          <div className="sub-section-container">
            <div className="sub-section-box">
              <p className="card-main-title">Programming languages:</p>
              <div className="skills-list">
              {
                languages.map((skill,index)=>(
                  <div key={index} className="skill-box">
                    <img src={skill.icon}/>
                    <Tag skill={skill.name}/>
                  </div>
                ))
              }
              </div>
            </div>

            <div className="sub-section-box">
              <p className="card-main-title">Web Technologies:</p>
              <div className="skills-list">
              {
                tech.map((skill,index)=>(
                  <div key={index} className="skill-box">
                    <img src={skill.icon}/>
                    <Tag skill={skill.name}/>
                  </div>
                ))
              }
              </div>
            </div>

            <div className="sub-section-box">
              <p className="card-main-title">Others:</p>
              <div className="skills-list">
              {
                others.map((skill,index)=>(
                  <div key={index} className="skill-box">
                    <img src={skill.icon}/>
                    <Tag skill={skill.name}/>
                  </div>
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