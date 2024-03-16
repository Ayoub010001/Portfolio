import Card from "../components/Card"
import {projects} from "../assets/data.json"


function Projects() {
  return (
    <section id="projects">
      <div className="max-width">
        <p className="section--title"><span className="green-text">01.</span> Projects</p> 
        <div className="project-cards-container">
          {
            projects.map((project,index)=>(
              <Card key={index} prj={project}/>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Projects